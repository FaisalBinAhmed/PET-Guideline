import { Layout, Menu, Steps } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";

import styles from "../styles/Questionnaire.module.css";

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
							<Step title="Finished" description="This is a description." />
							<Step title="In Progress" description="This is a description." />
							<Step title="Waiting" description="This is a description." />
						</Steps>
					</div>
				</Sider>
				<Layout>
					<Content style={{ margin: "24px 16px 0" }}>
						<div
							className="site-layout-background"
							style={{ padding: 24, minHeight: 360 }}>
							content
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};
export default questionnaire;
