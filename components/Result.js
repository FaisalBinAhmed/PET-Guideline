import { Card, Avatar, Button, Divider, Space } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Result.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState } from "react";

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
	console.log(primary, secondary);
	return (
		<div className={styles.root}>
			<div className={styles.primary}>
				<div className={styles.container}>
					<div style={{ fontSize: "20px" }}>Your Best PET:</div>
					<div className={styles.hero}>Differential Privacy</div>
					<div className={styles.subtitle}>
						While this is the best technolgy for you, it doesn't fulfill all of
						your chosen criteria. Here are the criteria it doesn't fulfill:
					</div>
					<div className={styles.cards}>
						{dummyData.map((item, index) => {
							return (
								<SmallCard
									index={index}
									missedCriteria={item.criteria}
									description={item.importance}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className={styles.secondary}>
				<div className={styles.container}>
					<div style={{ fontSize: "20px" }}>Your Alternative PET:</div>
					<div className={styles.hero}>Homomorphic Encryption</div>
					<div className={styles.subtitle}>
						I doesnn't fullfill 3 of your criteria. However you still might want
						to learn more about this tech before making an informed decision.
					</div>
					<div className={styles.cards}>
						{dummyData2.map((item, index) => {
							return (
								<SmallCard
									index={index}
									missedCriteria={item.criteria}
									description={item.importance}
								/>
							);
						})}
					</div>
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

export default Result;
