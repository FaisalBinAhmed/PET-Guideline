import { Modal, Button } from "antd";

const LearnMore = ({ visible, setVisible }) => {
	return (
		<Modal
			visible={visible}
			title="Title"
			// onOk={handleOk}
			onCancel={() => setVisible(false)}
			footer={[
				<Button
					key="back"
					// onClick={handleCancel}
				>
					Return
				</Button>,
				<Button
					key="submit"
					type="primary"
					// loading={loading}
					// onClick={handleOk}
				>
					Submit
				</Button>,
				<Button
					key="link"
					href="https://google.com"
					type="primary"
					// loading={loading}
					// onClick={handleOk}
				>
					Search on Google
				</Button>,
			]}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	);
};
export default LearnMore;
