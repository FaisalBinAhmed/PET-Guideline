import { Card, Avatar, Button, Divider, Space, Typography } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Question.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState } from "react";

const { Meta } = Card;

const Question = ({ question, description = "", handleAnswer, yes, no }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={styles.container}>
			<Card>
				<Meta
					style={{ fontSize: "18px" }}
					avatar={<Avatar icon={<QuestionOutlined />} />}
					title={<Typography.Title level={3}>{question}</Typography.Title>}
					description={description}
				/>
				<div className={styles.skip}>
					{/* <Button type="link" onClick={() => setVisible(true)}>
						Learn More
					</Button> */}
				</div>
				<Divider />
				<div className={styles.answer}>
					<AnswerButton
						title="YES"
						desc={yes}
						color="green"
						handleClick={handleAnswer}
						value={1}
					/>

					<AnswerButton
						title="NO"
						desc={no}
						color="#673AB7"
						handleClick={handleAnswer}
						value={0}
					/>
				</div>
				<div className={styles.skip}>
					{/* <Button onClick={() => handleAnswer(4)} type="link">
						Not Sure / Skip
					</Button> */}
				</div>
			</Card>
			<LearnMore visible={visible} setVisible={setVisible} />
		</div>
	);
};
export default Question;
