import { Button, Typography } from "antd";

const { Title } = Typography;

const AnswerButton = ({ title, desc, color, handleClick, value }) => {
	return (
		<Button
			type="dashed"
			onClick={() => handleClick(value)}
			block
			style={{ height: "10vw" }}>
			<Title style={{ color }}>{title}</Title>
			<Title level={5}>{desc}</Title>
		</Button>
	);
};
export default AnswerButton;
