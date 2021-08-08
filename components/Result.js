import { Card, Popover, Tag, Collapse } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Result.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState, useEffect } from "react";

import { questionData } from "../data/qustionsData";
import { pets } from "../data/petData";

const Result = ({ primary, secondary, hi, sec }) => {
	// const [visible, setVisible] = useState(false);

	const [best, setBest] = useState([]);
	const [alt, setAlt] = useState([]);

	const [secUsed, setSecUsed] = useState(false);

	console.log(primary, secondary);

	useEffect(() => {
		const bestPET = [];

		const secondBest = [];

		const highestPoint = primary[0]?.missed?.length;

		console.log(highestPoint);
		primary.forEach((item) => {
			//get best ones
			if (item.missed?.length === highestPoint) {
				bestPET.push(item);
			} else {
				secondBest.push(item);
			}
		});

		if (primary.length == 1) {
			setSecUsed(true);
			secondBest.push(secondary[0]);
		}

		setBest(bestPET);
		setAlt(secondBest);
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.primary}>
				<div className={styles.container}>
					<div style={{ fontSize: "20px" }}>Your Best PET(s):</div>
					<div style={{ fontSize: "17px", color: "green" }}>
						Matches {hi} criteria
					</div>
					{best.map((item, index) => {
						return (
							<PET
								key={index}
								title={item.name}
								missed={item.missed}
								matched={item.matched}
							/>
						);
					})}
				</div>
			</div>
			{alt.length && (
				<div className={styles.secondary}>
					<div className={styles.container}>
						<div style={{ fontSize: "20px" }}>Your Alternative PET(s):</div>
						<div style={{ fontSize: "17px", color: "green" }}>
							Matches {secUsed ? sec : hi} criteria
						</div>
						{alt.map((item, index) => {
							return (
								<PET
									key={index}
									title={item.name}
									missed={item.missed}
									matched={item.matched}
									alt={true}
								/>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

// const SmallCard = ({ index, missedCriteria, description }) => {
// 	return (
// 		<Card
// 			title={missedCriteria}
// 			extra={<a href="#">More Info</a>}
// 			bordered={false}
// 			style={{ width: 300, marginRight: "10px" }}>
// 			<p>{description}</p>
// 		</Card>
// 	);
// };

const PET = ({ title, missed, matched, alt }) => {
	return (
		<>
			<div className={styles.hero}>{pets.find((i) => i.id == title).name}</div>
			<div className={styles.tagContainer}>
				{matched.map((item) => (
					<Popover
						content={
							<div className={styles.tooltip}>
								{questionData[item - 1].importance}
							</div>
						}>
						<Tag style={{ fontSize: "20px", padding: "10px" }} color="green">
							{questionData[item - 1].step}
						</Tag>
					</Popover>
				))}
			</div>
			{!!missed.length && (
				<>
					{!alt && !!missed.length && (
						<div className={styles.subtitle}>
							While this is the best technolgy for you, it doesn't match all of
							your chosen criteria. Here are the choices it doesn't match:
						</div>
					)}
					{alt && (
						<div className={styles.subtitle}>
							While the above PET is another alternative technolgy for you, it
							doesn't match all of your chosen criteria. Here are the choices it
							doesn't match:
						</div>
					)}

					<div className={styles.mismatch}>Misses {missed.length} criteria</div>
				</>
			)}
			<div className={styles.cards}>
				{missed.map((item) => {
					return (
						<Popover
							content={
								<div className={styles.tooltip}>
									{questionData[item - 1].importance}
								</div>
							}>
							<Tag style={{ fontSize: "20px", padding: "10px" }} color="red">
								{questionData[item - 1].step}
							</Tag>
						</Popover>
					);
				})}
			</div>
			<div className={styles.info}>{pets.find((i) => i.id == title).info}</div>
			<Collapse ghost>
				<Collapse.Panel
					style={{
						fontSize: "20px",
						width: "90%",
					}}
					header="More Info"
					key="1">
					<p>{pets.find((i) => i.id == title).how}</p>
				</Collapse.Panel>
				<Collapse.Panel
					style={{
						fontSize: "20px",
						width: "90%",
					}}
					header="Useful links"
					key="2">
					<p style={{ display: "inline" }}>1. </p>
					<a style={{ display: "inline" }}>
						{pets.find((i) => i.id == title).link1}
					</a>
					<br />
					<p style={{ display: "inline" }}>2. </p>
					<a style={{ display: "inline" }}>
						{pets.find((i) => i.id == title).link2}
					</a>
				</Collapse.Panel>
			</Collapse>
		</>
	);
};

export default Result;
