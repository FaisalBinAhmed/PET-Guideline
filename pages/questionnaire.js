import { Layout, Menu, Steps, Typography } from "antd";
// import {
// 	UploadOutlined,
// 	UserOutlined,
// 	VideoCameraOutlined,
// } from "@ant-design/icons";

import styles from "../styles/Questionnaire.module.css";
import Question from "../components/Question";

const { Header, Content, Footer, Sider } = Layout;
const { Step } = Steps;

const questionnaire = () => {
	return (
		<div>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					width="25vw"
					style={{ backgroundColor: "#DEEAEA" }}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}>
					<div className={styles.steps}>
						<Steps direction="vertical" size="small" current={1}>
							<Step
								title="Computing Cost"
								description="This is a description."
							/>
							<Step title="Publishing" description="This is a description." />
							<Step
								title="Stastical Disclosure"
								description="This is a description."
							/>
						</Steps>
					</div>
				</Sider>
				<Layout>
					{/* <Header> </Header> */}
					<div className={styles.titlebar}>
						<Typography.Paragraph className={styles.title}>
							PETg
						</Typography.Paragraph>
						{/* <Typography.Paragraph className={styles.subtitle}>
							Privacy-enhancing Technology guideline
						</Typography.Paragraph> */}
					</div>
					<Content className={styles.content}>
						<Question />
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};
export default questionnaire;
