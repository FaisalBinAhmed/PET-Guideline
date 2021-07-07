import { Card, Avatar, Button, Divider, Space } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Result.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState, useEffect } from "react";

import { questionData } from "../data/qustionsData";
import { pets } from "../data/petData";

const { Meta } = Card;

const dummyData = [
	{
		criteria: "Computational cost",
		importance:
			"Computational cost is important when you don't want to spend a lot of computational resource, where the resource can be limited...",
	},
	{
		criteria: "Multiple Stakeholders",
		importance:
			"Computational power is important when you don't want to spend a lot of computational resource, where the resource can be limited...",
	},
];
const dummyData2 = [
	{
		criteria: "Computational cost",
		importance:
			"Computational cost is important when you don't want to spend a lot of computational resource, where the resource can be limited...",
	},
	{
		criteria: "Multiple Stakeholders",
		importance:
			"Computational power is important when you don't want to spend a lot of computational resource, where the resource can be limited...",
	},
	{
		criteria: "Textual data",
		importance:
			"Computational power is important when you don't want to spend a lot of computational resource, where the resource can be limited...",
	},
];

const Result = ({ primary, secondary }) => {
	// const [visible, setVisible] = useState(false);

	const [best, setBest] = useState([]);
	const [alt, setAlt] = useState([]);

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

		// if (primary.length < 3) {
		// 	secondary.forEach((item) => {
		// 		//get best ones
		// 		secondBest.push(item);
		// 	});
		// }

		setBest(bestPET);
		setAlt(secondBest);
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.primary}>
				<div className={styles.container}>
					<div style={{ fontSize: "20px" }}>Your Best PET:</div>
					{best.map((item, index) => {
						return <PET title={item.name} missed={item.missed} />;
					})}
				</div>
			</div>
			<div className={styles.secondary}>
				<div className={styles.container}>
					<div style={{ fontSize: "20px" }}>Your Alternative PET:</div>
					{alt.map((item, index) => {
						return <PET title={item.name} missed={item.missed} alt={true} />;
					})}
				</div>
			</div>
		</div>
	);
};

const SmallCard = ({ index, missedCriteria, description }) => {
	return (
		<Card
			title={missedCriteria}
			extra={<a href="#">More Info</a>}
			bordered={false}
			style={{ width: 300, marginRight: "10px" }}>
			<p>{description}</p>
		</Card>
	);
};

const PET = ({ title, missed, alt }) => {
	return (
		<>
			<div className={styles.hero}>{pets.find((i) => i.id == title).name}</div>
			{!alt && !!missed.length && (
				<div className={styles.subtitle}>
					While this is the best technolgy for you, it doesn't fulfill all of
					your chosen criteria. Here are the criteria it doesn't fulfill:
				</div>
			)}
			{alt && (
				<div className={styles.subtitle}>
					While the above PET is another alternative technolgy for you, it
					doesn't fulfill all of your chosen criteria. Here are the criteria it
					doesn't fulfill:
				</div>
			)}
			<div className={styles.cards}>
				{missed.map((item, index) => {
					return (
						<SmallCard
							index={index}
							missedCriteria={questionData[item].step}
							description={questionData[item].importance}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Result;
