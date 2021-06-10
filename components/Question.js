import { Card, Avatar, Button, Divider, Space } from "antd";
import {
	CheckOutlined,
	CloseOutlined,
	DoubleRightOutlined,
	QuestionOutlined,
} from "@ant-design/icons";
import styles from "../styles/Question.module.css";
import AnswerButton from "./AnswerButton";

const { Meta } = Card;

const Question = () => {
	return (
		<div className={styles.container}>
			<Card>
				<Meta
					avatar={<Avatar icon={<QuestionOutlined />} />}
					title="Do You want to Publish the data?"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				/>
				<Divider />
				<div className={styles.answer}>
					<AnswerButton
						title="YES"
						desc="you should only choose this .."
						color="green"
					/>

					<AnswerButton
						title="NO"
						desc="If you do not intend to .."
						color="red"
					/>
				</div>
				<div className={styles.skip}>
					<Button type="link">Skip</Button>
				</div>
			</Card>
		</div>
	);
};
export default Question;
