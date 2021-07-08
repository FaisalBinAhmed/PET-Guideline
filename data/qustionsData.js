export const questionData = [
	{
		id: 1,
		name: "Is statistical disclosure control important to you?",
		importance:
			"Statistical disclosure control is useful when you want to control the statistical confidentiality of data. These are a set of measures to reduce or eliminate the risk of data being used to link back to the original subject or to expose any sensitive or personal information.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Statistical Disclosure",
	},
	{
		id: 2,
		name: "Do you plan to publish the data?",
		importance:
			"If you want to publish the data you’re currently dealing with, you have to take additional measures before you publish the data. The data need to be processed, checked against private info and local law before it can be published. The purpose of publication should also need to be taken into account.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Data Publication",
	},
	{
		id: 3,
		name: "Is the data distributed or stored in a central location?",
		importance:
			"If the data is stored in multiple locations then managing the date in all of those locations is deemed necessary. Since the data will be transported, synced and stored, it should also be made sure the data and privacy are protected at those stages.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Distributed Data",
	},
	{
		id: 4,
		name: "Do you collect data from edge devices?",
		importance:
			"The data stored in edge devices can be handled in two ways. In one way, the raw private data does not need to leave user devices for processing, the other relies on direct transfer of data between the client and a server. The tradeoff here is the accuracy of the insights and telemetry received from the end users.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Edge Devices",
	},
	{
		id: 5,
		name: "Will the data be transported",
		importance:
			"The data that will be transferred has to be protected against certain threats, mainly the data in rest and transit are vulnerable to many attacks. Also if the data crossed International boundaries, the local legislations and regulations take precedence. For many reasons the data can not be transferred to another country or region.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Data Transportation",
	},
	{
		id: 6,
		name: "Do you need real data?",
		importance:
			"In some cases, the desired goal can be achieved without using real data at all. For example if you want to generate a fake dataset, or train your ML model with similar data for purposes like image recognition, deep fake creation, and populating websites with dummy data. In these cases, the real data has no benefits over synthetically generated data, especially as the purpose is to learn the type of data, not the data itself.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Need of Real Data",
	},
	{
		id: 7,
		name: "Is low computational cost impotant to you?",
		importance:
			"The amount of processing power, and memory taken to implement a specific technology can be a limiting factor in many scenarios. If the data is being processed in an IoT device or devices with limited computational power, certain technologies may not be eligible to be used.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Computational Cost",
	},
	{
		id: 8,
		name: "Are there multiple stakeholders?",
		importance:
			"If there are more than one stakeholder involved it can raise multiple concerns. The stakeholders may not agree on sharing their data between them. It’s also possible the stakeholders do not have the same rights to the data.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Multiple StakeHolders",
	},
	{
		id: 9,
		name: "Are third party stakeholders involved?",
		importance:
			"If a third party is involved during any phase of the data life cycle, certain policy can restrict sharing of data with that party. If you need to share the data with a third party, certain technologies can help alleviate this issue while providing minimal loss had it been shared without such restrictions",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Third Parties",
	},
	{
		id: 10,
		name: "Do you need lossless technology?",
		importance:
			"The losslessness of a privacy enhancing technology is important when you’re dealing with mission critical data and the insights derived from the data should reproduce the same output for the same input. In other words the process of applying any privacy enhancing technology shouldn’t change the data in a way that it can affect the performance of the useful metrics.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Lossless",
	},
	{
		id: 11,
		name: "Is accuracy important to you?",
		importance:
			"Certain privacy enhancing technology provides better accuracy than others. In other words, for the same data, certain technologies will produce consistent results. Accuracy is important when you have huge amount of data and little discrepancy in accuracy can lead to huge change in the final output.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Accuracy",
	},
	{
		id: 12,
		name: "Is the data textual?",
		importance:
			"Text based data needs different processing than non-textual media based data. Some technologies work better with text based data. Since non textual data are stored and formatted in specific way, even storing the same data by different formats can lead to varying privacy enhancements by the same technologies.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Textual Data",
	},
	{
		id: 13,
		name: "Dimension of the data?",
		importance:
			"This is an important metric when comparing different anonymization techniques like k-anonymity, l-diversity and t-closeness. Although, there is an improvement over the former, the higher dimension a dataset is, the former tends to provide better anonymity.",
		yes: "You should choose yes if ...",
		no: "you shoudn't select this if....",
		step: "Data Dimension",
	},
];
