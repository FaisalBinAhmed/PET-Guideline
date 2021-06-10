import { Button, Typography } from "antd";

const { Title } = Typography;

const AnswerButton = ({ title, desc, color }) => {
	return (
		<Button type="dashed" block style={{ height: "10vw" }}>
			<Title style={{ color }}>{title}</Title>
			<Title level={5}>{desc}</Title>
		</Button>
	);
};
export default AnswerButton;
