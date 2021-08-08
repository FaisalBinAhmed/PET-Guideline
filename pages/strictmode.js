import { useState, useRef, useEffect } from "react";
import { Layout, Badge, Steps, Typography, Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import styles from "../styles/Questionnaire.module.css";
import Question from "../components/Question";
import { questionData } from "../data/qustionsData";
import { pets } from "../data/petData";
import Result from "../components/Result";
import Link from "next/link";

const { Content, Sider } = Layout;
const { Step } = Steps;

const refactorQuestions = (questionArray) =>
	questionArray.sort((a, b) => a.score - b.score);

const strictmode = () => {
	const [askableQuestions, setAskableQuestions] = useState(
		refactorQuestions(questionData)
	); //initially all questions
	const [techSets, setTechSets] = useState([...pets]); //initially all techs are eligible
	const [currentQuestion, setCurrentQuestion] = useState(askableQuestions[0]); //first question is chosen arbitrarily

	useEffect(() => {
		setCurrentQuestion(askableQuestions[0]);
	}, [askableQuestions]);

	const [answers, setAnswers] = useState([]);
	const [description, setDescription] = useState([]);

	const [showResult, setShowResult] = useState(false);

	const router = useRouter();

	const primary = useRef("");
	const secondary = useRef("");

	const hiscore = useRef();
	const secondScore = useRef();

	const handleAnswer = (ans) => {
		// setquestionIndex(questionIndex + 1);

		const newAnswers = [...answers, ans];
		console.log(newAnswers);

		const newDesc = [...description];

		if (ans === 1) {
			newDesc.push("YES");
		}
		if (ans === 0) {
			newDesc.push("NO");
		}
		setDescription(newDesc);
		setAnswers(newAnswers);

		const newAskableQuestions = askableQuestions.filter(
			(question) => question.id != currentQuestion.id
		);
		setAskableQuestions(newAskableQuestions);
		processQuestionSet(ans, newAskableQuestions);
	};
	//issue when ans = 0 and the subsequent checkis 1 arbitrarily?
	const processQuestionSet = (answer, newQuestions) => {
		const newTechSets = techSets.filter((item) => {
			return item.arr[currentQuestion.id - 1] == answer;
		});
		console.log("techset", newTechSets);
		setTechSets(newTechSets);

		const newAskableQuestions = newQuestions.filter((question) => {
			const shouldInclude = newTechSets.every((tech) => {
				console.log(
					"->",
					question.name,
					tech.id,
					question.acceptedTech[tech.id],
					question.acceptedTech[tech.id] == (answer || 3)
				);
				return question.acceptedTech[tech.id] == (answer || 3); // ?? prev == 1
			});
			console.log("-/", shouldInclude);
			return shouldInclude;
		});

		setAskableQuestions(newAskableQuestions);

		// if (askableQuestion.length && techSets.length > 1) {
		// 	setCurrentQuestion(askableQuestion[0]);
		// } else {
		// 	// console.log(
		// 	// 	"Suggested technologies:",
		// 	// 	techSets.map((tech) => tech.name)
		// 	// );
		// }

		console.log("current question", newAskableQuestions);
	};

	const handleResults = () => {
		calculateResults();
		setShowResult(true);
	};

	const calculateResults = () => {};

	return (
		<div>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					width="25vw"
					style={{ backgroundColor: "#DEEAEA" }}>
					<div className={styles.steps}>
						<Steps direction="vertical" size="small">
							{askableQuestions.map((item, index) => (
								<Step
									title={item.step}
									key={item.id}
									description={description[index]}></Step>
							))}
						</Steps>
					</div>
				</Sider>
				<Layout style={{ maxWidth: "75vw" }}>
					<div className={styles.titlebar}>
						<Typography.Paragraph
							className={styles.title}
							onClick={() => router.reload("/questionnaire")}>
							PET guideline
						</Typography.Paragraph>
					</div>
					<Content className={styles.content}>
						{showResult ? (
							<Result
								primary={primary.current}
								secondary={secondary.current}
								hi={hiscore.current}
								sec={secondScore.current}
							/>
						) : askableQuestions.length && techSets.length > 1 ? (
							<Question
								question={currentQuestion.name}
								handleAnswer={handleAnswer}
								description={currentQuestion.importance}
								yes={currentQuestion.yes}
								no={currentQuestion.no}
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
export default strictmode;
