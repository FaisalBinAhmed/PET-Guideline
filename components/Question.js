import { Card, Avatar, Button, Divider, Space } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Question.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState } from "react";

const { Meta } = Card;

const Question = ({ question, description = "", handleAnswer }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={styles.container}>
			<Card>
				<Meta
					avatar={<Avatar icon={<QuestionOutlined />} />}
					title={question}
					description={description}
				/>
				<div className={styles.skip}>
					<Button type="link" onClick={() => setVisible(true)}>
						Learn More
					</Button>
				</div>
				<Divider />
				<div className={styles.answer}>
					<AnswerButton
						title="YES"
						desc="you should only choose this .."
						color="green"
						handleClick={handleAnswer}
						value={1}
					/>

					<AnswerButton
						title="NO"
						desc="If you do not intend to .."
						color="#673AB7"
						handleClick={handleAnswer}
						value={0}
					/>
				</div>
				<div className={styles.skip}>
					<Button type="link">Not Applicable / Not Sure</Button>
				</div>
			</Card>
			<LearnMore visible={visible} setVisible={setVisible} />
		</div>
	);
};
export default Question;
