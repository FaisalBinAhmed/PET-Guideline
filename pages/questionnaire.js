import { useState, useRef } from "react";
import { Layout, Menu, Steps, Typography, Button } from "antd";
// import {
// 	UploadOutlined,
// 	UserOutlined,
// 	VideoCameraOutlined,
// } from "@ant-design/icons";

import styles from "../styles/Questionnaire.module.css";
import Question from "../components/Question";
import { questionData } from "../data/qustionsData";
import { pets } from "../data/petData";
import Result from "../components/Result";

const { Header, Content, Footer, Sider } = Layout;
const { Step } = Steps;

const calculateBest = (pooldata) => {
	const counterObj = pooldata.reduce((counter, key) => {
		counter[key] = 1 + counter[key] || 1;
		return counter;
	}, {});

	// console.log(counterObj);

	const sortedArr = Object.entries(counterObj).sort((a, b) => b[1] - a[1]);

	console.log("sorted", sortedArr);

	//best two

	const highestPoint = sortedArr[0][1];

	let secondHighestPoint;

	const bestPET = [];

	const secondBest = [];

	//get best ones

	sortedArr.forEach((item) => {
		if (item[1] == highestPoint) {
			bestPET.push(item[0]);
		}
	});

	//get second best score

	sortedArr.forEach((item) => {
		for (let i = highestPoint - 1; i >= 0; i--) {
			if (item[1] == i) {
				if (!secondHighestPoint) {
					secondHighestPoint = i;
				}
			}
		}
	});

	//get second best ones

	sortedArr.forEach((item) => {
		if (item[1] == secondHighestPoint) {
			secondBest.push(item[0]);
		}
	});

	// console.log(bestPET);
	// console.log(secondBest);

	return { bestPET, secondBest };
};

const calculateMissedCriteria = (pet, ansArr) => {
	//geting mapping data
	const petArr = pets.find((item) => item.id == pet).arr;

	//comparing both arrays for mismatch

	const missedCriteria = []; //id for the criteria

	petArr.forEach((item, index) => {
		if (item !== ansArr[index]) {
			if (item !== 2 && item !== 3) {
				//ignoring irrelevant and unknown data for now
				missedCriteria.push(questionData[index].id);
			}
		}
	});

	console.log(pet, petArr, missedCriteria);
	return missedCriteria;
};

const questionnaire = () => {
	const [questionIndex, setquestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);

	const [showResult, setShowResult] = useState(false);
	// const [pool, setPool] = useState([]);

	const primary = useRef("");
	const secondary = useRef("");

	const handleAnswer = (ans) => {
		setquestionIndex(questionIndex + 1);
		const newAnswers = [...answers, ans];
		// console.log(newAnswers);
		setAnswers(newAnswers);
	};

	const handleResults = () => {
		calculateResults();
		setShowResult(true);
	};

	const calculateResults = () => {
		let newPool = [];
		answers.map((ans, i) => {
			pets.map((pet, j) => {
				if (pet.arr[i] === ans) {
					newPool.push(pet.id);
				}
			});
		});
		// console.log(newPool);
		const result = calculateBest(newPool);

		// console.log(result);

		const primaryPET = [];
		const secondaryPET = [];

		//for each pet find missed criteria

		result.bestPET.forEach((item) => {
			const missedCriteria = calculateMissedCriteria(item, answers);

			primaryPET.push({
				name: item,
				missed: missedCriteria,
			});
		});

		result.secondBest.forEach((item) => {
			const missedCriteria = calculateMissedCriteria(item, answers);

			secondaryPET.push({
				name: item,
				missed: missedCriteria,
			});
		});

		// console.log("second missed", secondaryPET);

		//sorting by who missed the least
		const sortedPrimary = primaryPET.sort((a, b) => {
			return a.missed.length - b.missed.length;
		});

		const sortedSecondary = secondaryPET.sort((a, b) => {
			return a.missed.length - b.missed.length;
		});

		// console.log("best missed", sortedPrimary);
		primary.current = sortedPrimary;
		secondary.current = sortedSecondary;
	};

	return (
		<div>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={(broken) => {
						// console.log(broken);
					}}
					width="25vw"
					style={{ backgroundColor: "#DEEAEA" }}
					onCollapse={(collapsed, type) => {
						// console.log(collapsed, type);
					}}>
					<div className={styles.steps}>
						<Steps direction="vertical" size="small" current={questionIndex}>
							{questionData.map((item) => (
								<Step title={item.step} key={item.id} />
							))}
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
						{showResult ? (
							<Result primary={primary.current} secondary={secondary.current} />
						) : questionIndex < 13 ? (
							<Question
								question={questionData[questionIndex]?.name}
								handleAnswer={handleAnswer}
							/>
						) : (
							<Button type="primary" size="large" onClick={handleResults}>
								Show Results
							</Button>
						)}
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};
export default questionnaire;
