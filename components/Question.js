import { Card, Avatar, Button, Divider, Space } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "../styles/Question.module.css";
import AnswerButton from "./AnswerButton";
import LearnMore from "./LearnMore";
import { useState } from "react";

const { Meta } = Card;

const Question = ({ question, handleAnswer }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={styles.container}>
			<Card>
				<Meta
					avatar={<Avatar icon={<QuestionOutlined />} />}
					title={question}
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
					<Button type="link">Skip</Button>
				</div>
			</Card>
			<LearnMore visible={visible} setVisible={setVisible} />
		</div>
	);
};
export default Question;
