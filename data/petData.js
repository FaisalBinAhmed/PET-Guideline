export const pets = [
	{
		id: "dp",
		name: "Differential Privacy",
		arr: [1, 1, 1, 1, 2, 1, 0, 1, 1, 0, 1, 3, 2],
		info: `Differential privacy is a technique of exposing some insights about a specific dataset without really exposing the real value of the dataset. This in turn protects the privacy of the data subjects, and it becomes mathematically infeasible to determine any insights about the original data subjects from the published data.

Differential privacy is mainly used in statistical disclosure. While this loses a little bit of accuracy from the original data, for all intents and purposes, the loss of statistical significance is negligible.  


Differential privacy is one of the most popular privacy enhancing technologies in the world today and many companies are thinking about it or already using it in their applications. 
`,
		how: `

Differential privacy sometimes uses an intermediary mechanism to control any statistical disclosure of individual data. Let’s say there are 50 data subjects that want to know a statistical calculation of their data without actually revealing the individual data. In case any parties know the majority of the data or if the data has been published elsewhere, the data of other unknown subjects can be deduced from it. To prevent this scenario, differential privacy dictates that the data of any random subject be replaced with a random data. Hence, adding a “noise” to the overall data. The noise is not statistically significant enough to introduce any discrepancy in the overall calculation of the data (i.e. average) but it protects the privacy of those individuals by hiding their real values.

This is particularly useful when some of the data is already known to the outside world. Without adding noise to the other data, the publication of the entire thing makes those other data vulnerable to attacks like linkage.
`,
	},
	{
		id: "fl",
		name: "Federated Learning",
		arr: [3, 3, 1, 1, 1, 3, 1, 1, 1, 2, 1, 3, 2],
		info: `Federated learning is mainly used in Artificial Intelligence and Machine Learning scenarios. However it can be applied to a broad range of use cases. In a nutshell, Federated learning provides a way to share analysis across multiple vendors or locations without actually sharing the data the analysis was based on.`,
		how: `Imagine you have 5 business partners that use one of your business software. In order to improve the software experience you want to know how it works in those systems: its performance and other metrics. However, this information can be private and companies will not agree to share any information that includes its private and sensitive business information. One solution is to build a mechanism that would gain analytical information from these individual companies. However, you might need to duplicate this analytical engine for the specific use cases and in the end, it could become very complicated to manage and aggregate this information.

Federated Learning comes to the rescue in this situation. Instead of building multiple analytical engines that do the same thing, Federated learning provides a mechanism to host the aggregated analytics engine at a central location while also getting information from those individual companies. The individual federated learning model in each company will analyze the data and send only the sanitized analysis to the central server. The server would then aggregate these analyses and create a central model. This new and updated central model will then be pushed to the client side for better analysis. The analysis is being improved while maintaining the privacy and security of these clients.`,
	},
	{
		id: "zkp",
		name: "Zero Knowledge Proof",
		arr: [3, 1, 3, 3, 1, 0, 3, 1, 1, 1, 3, 2, 2],
		info: `Zero knowledge proof lets a person (called prover in this case) prove another person (called a verifier) that he knows about something without giving away the knowledge. This is very useful when you can’t give away any sensitive information but at the same time have to prove the knowledge of said information. For this reason, zero knowledge proof is very useful to implement authentication mechanisms based on its principles.`,
		how: `Imagine you have a skill of identifying the sex of kittens just by looking at them. But how do you prove this skill to a person who can’t identify the sex of the kittens? This is where zero knowledge proof comes to play.

To prove the verifier that you indeed know about identifying the sexes of kittens you don’t have to tell the verifier which kitten is what. In other words you don’t need to reveal the information to prove your knowledge. First, two identical kittens but with different sexes will be handed to the verifier and he would assume and call them kitten A and B. By looking at them you know which kitten is male and which is female but how do you prove it?

The verifier would then swap the kitten unbeknownst to you whether he swapped it or not. If he swaps, kitten A will take the place of kitten B and vice versa. However you have no way of knowing if he swapped or not, unless of course you identify them by their sex and tell the verifier whether he swapped them ir not. This swapping takes place multiple times. With each correct answer you eliminate the chance of randomly guessing and after a certain number of successful guesses, the verifier can be assured that you indeed know to identify the sex if kittens.`,
	},
	{
		id: "he",
		name: "Homomorphic Encryption",
		arr: [3, 2, 3, 1, 1, 3, 1, 3, 1, 1, 3, 2, 2],
		info: `Homomorphic encryption is a cryptographic technique that lets an entity perform computational operations on an encrypted data without needing to decrypt the data to plain text first. While this might sound like an antithesis of the idea of cryptography, it lets any participating entity perform operations without sharing of the original encryption keys.`,
		how: `Imagine you want to implement a voting system where voters can identify their vote has been counted but without telling anyone publicly who they voted for. If someone votes for person A, they receive an unique encrypted code that resembles their vote in the system. These codes are publicly available and anyone can verify whether their vote was valid. However if the vote itself was encrypted, how do you verify who got the most votes? Homomorphic encryption comes into play here. Instead of decrypting everyone’s vote and then counting the tally, all votes for person A will be counted by multiplying the cipher text of the individual votes. Then the big cipher text will be publicly decrypted revealing and validating the number of votes for person A. This system ensures the individual votes of the voters are never decrypted. Hence ensuring cryptographic integrity while adding extra computations on top.`,
	},
	{
		id: "smc",
		name: "Secure Multiparty Computation",
		arr: [3, 3, 1, 2, 1, 3, 1, 1, 1, 1, 3, 2, 2],
		info: `Secure multiparty computation is useful when multiple parties want to do computation on a shared data together but they don’t trust each other. In normal cases an intermediary can solve this issue by being trusted by everyone. However there’s no guarantee that the intermediary is not corrupted and is colluding with one or multiple parties. This is where secure multiparty computation comes to play. Instead of relying on an intermediary, an algorithm is used to play the same role.`,
		how: `Imagine three big technology companies want to calculate the average wage of their employees salaries without revealing the respective average salary of each company. Normally an intermediary can calculate the average and distribute the information. However Secure multiparty computation does away with intermediaries and uses a smart algorithm.

Instead of giving away the salary information, each company randomly generates two numbers between 0 and 3. Each company now multiplies their own average salary with these numbers. Each company now provides one of these two numbers to another company and the other number to the last company. Now one company has a different version of the same information about the other companies. 

This way the other two companies can’t share the information about the first company and derive its original value, as only the first company knows the numbers it multiplied with.


Now the first company would add the two numbers it was provided by the other companies and subtract the numbers it provided to the other companies.

After this process all the sums will be added together to derive the actual sum of the three companies. Finding the average is now just the matter of dividing it by 3. This way the companies are able to compute their average salary without actually revealing the private information. This way the necessity of trust and intermediary is eradicated.`,
	},
	{
		id: "ob",
		name: "Obfuscation",
		arr: [3, 1, 2, 2, 2, 3, 1, 3, 2, 1, 1, 3, 2],
		info: `Obfuscation is the process of obscuring the meaning of communication deliberately to make the data being transmitted harder for other parties to understand. It is used in natural language and is also used in software engineering and data privacy. Although it shouldn’t be confused with ciphertext.

Unlike ciphertext, obfuscated code can be made sense of without needing to know any secret keys. However, that doesn’t mean it’s easy to decipher. In software engineering, programmers use many techniques to make their source code as unreadable as possible. So that, In the case of a leak, it would be quite hard for adversaries to understand.

Obfuscation is very useful to ensure intellectual protection and digital rights management. An obfuscated source code is harder to reverse engineer than otherwise. It also makes tampering with the code and its redistribution harder.`,
		how: `There are many techniques to apply obfuscation. For software engineering, a code can be obfuscated by obscuring its control flows, string encryption, renaming obfuscation, minification and so on. Normally any combination of these techniques are used. 

To use string encryption, all the string values in the software binary are encrypted and replaced with ciphertext, the secret key is usually hidden in the binary and is unintelligible to the human reader. The original strings are only restored when the software process is in the runtime. This makes it extremely hard for reverser engineers to understand critical parts of the source code and their operations.`,
	},
	{
		id: "dape",
		name: "Data Perturbation",
		arr: [1, 1, 2, 2, 2, 3, 0, 3, 2, 0, 3, 3, 2],
		info: `Data perturbation is the technique of adding noise to a dataset that makes it harder for any unauthorized entities to derive individual records of a data subject.

There are many ways to achieve data perturbation. Differential privacy, data masking, randomization etc. are different techniques to achieve data perturbation. These techniques can be applied to a dataset in any combination.

Data perturbation is of two types: 1. Probability distribution approach and 2. Value distortion approach. 

In probability distribution approach the data is replaced from the same data sample it’s a part of. On the other hand in the value distortion approach, the noise can be added to it in an additive or randomized way. It uses a decision tree classification method to decide which type of noise should be added to a data depending on various criteria - much like this guideline.`,
		how: `Data perturbation is an umbrella term for various techniques. These techniques are explained already in the same chapter. Please refer to their individual implementations.`,
	},
	{
		id: "anon",
		name: "Anonymization",
		arr: [1, 1, 3, 2, 2, 3, 2, 1, 1, 0, 1, 1, 3],
		info: `Anonymization is the process of removing amany information from a dataset that can be used to link back to a data subject, violating their privacy. Anonymization removes personally identifiable information to retain its subject’s anonymity.

Anonymization is an umbrella term for many techniques. Different properties of anonymization can be achieved by implementing any combinations of anonymization techniques. Such properties are k-anonymity, l-diversity, t-closeness etc. An anonymized data set is said to be k-anonymous if the properties of k-anonymity have been achieved in the data set. The techniques to achieve anonymization are: generalization, swapping, classification, suppression etc.`,
		how: `Data anonymization is irreversible. Meaning it is no longer possible to retrieve personal information from the data set after anonymization has been applied. In classification technique: any value containing personal information is removed and replaced with the type of the information. For example: if the data contains: Faisal has bought a house in Munich in 2021,” it will be replaced with anonymized data as “[NAME] has bought a house in [LOCATION] on [DATE].”`,
	},
	{
		id: "kan",
		name: "K-anonymity",
		arr: [1, 1, 3, 2, 2, 3, 2, 1, 1, 0, 1, 1, 1],
		info: `K-anonymity is a concept of adapting anonymization in a way that it becomes harder to do re-identification attacks on a dataset by linking it with another dataset published elsewhere. It is a property of an anonymized dataset and there are many ways to achieve k-anonymity.



It is said that in the US 87 percent of the population can be uniquely identified with just 3 information: gender, date of birth and zip code. Considering how much data is collected from us by various data collectors and processors, it is scary that so little information is needed to link any data back to us. This is especially scary when our sensitive and critical information like: medical records and pension data are susceptible to breaches if no privacy enhancing is applied everywhere.`,
		how: `If a data set contains re-identifiable attributes such ase name, age, gender, postcode etc, it could be used to narrow the data down to an individual by linking relevant data from other sources.
		K-anonymity must follow these conditions:

The other columns that are intact must not reveal information about the column that has been generalized.

The sensitive columns should have varying values. It must not be the same throughout the dataset.


K-anonymity works when the dimension of data is low. Higher dimensional data has more probability to contains other columns that may reduce the effectiveness of generalized columns.
		`,
	},
	{
		id: "ld",
		name: "L-diversity",
		arr: [1, 1, 3, 2, 2, 3, 2, 1, 1, 0, 1, 1, 0],
		info: `L-diversity is an extension of k-anonymity in a way that reduces the granularity of the data representation. L-diversity addresses a few weaknesses of k-anonymity and protects against attacks such as Homogeneity attack and Background Knowledge attack. It also addresses the shortcoming of k-anonymity which doesn’t provide group anonymity. 


L-diversity is computationally more expensive to achieve and even after the property is achieved it’s still susceptible to many other attacks like skewness and similarity attacks.`,
		how: `A dataset is said to be l-diversified if for each group of records that share a combination of key attributes, there must be an l well represented value for each sensitive attribute. In other words there must be l numbers of distinct values in the sensitive attributes/columns.`,
	},
	{
		id: "tc",
		name: "T-closeness",
		arr: [1, 1, 3, 2, 2, 3, 2, 1, 1, 0, 0, 1, 0],
		info: `T-closeness is an extension of l-diversity and k-anonymity as it addresses some of the shortcomings of both anonymization properties. 

T-closeness also addresses the two vulnerabilities of k-anonymity such as homogeneity attack and background knowledge attack.


T-closeness defines that the distribution of sensitive data in a group shouldn’t be too far from its distribution in the full population. It’s very effective with regards to higher dimensional data and has less utility loss compared to k-anonymity.`,
		how: ``,
	},
	{
		id: "psu",
		name: "Psuedonymization",
		arr: [0, 1, 3, 2, 2, 3, 0, 1, 1, 0, 1, 1, 2],
		info: `Pseudonymization as its name suggests is a process and sort of achieving anonymization but with an asterisk. In other words, pseudonymization is the process in which any personally identifiable information in a data set is replaced by pseudonyms. 

Pseudonymization is currently promoted by European Union because it lets companies easily implement pseudo-anonymization while complying with its GDPR.`,
		how: `The pseudonyms can be any code, randomly generated token or data strings that are unique to the data set and are linked to the original data subject. The mapping of pseudonyms to their respective data is stored in a different database or location to reduce the chance of breach and linkage. This is a reversible process as it lets companies or data processors restore its original content by linking the pseudonyms from the mapping data. However since the data is pseudonymized and stored separately, it reduces the chance of any adversaries to re-identify the information back to the original subjects. 

Pseudonymization is one of the fastest and computationally least expensive ways to achieve privacy enhancement. This is one of the major reasons European Union is advocating its adoption.`,
	},
	{
		id: "ran",
		name: "Randomization",
		arr: [1, 1, 3, 2, 2, 2, 3, 2, 2, 0, 1, 3, 2],
		info: `Randomization is a technique where in a large dataset, the individual cells or fields or the data in those fields will be randomly arranged or changed. This is done in a way it doesn’t affect the entire data set in a meaningful way. However, this added randomization makes deriving any information regarding a particular data subject less probable.`,
		how: `Randomization is considered a data perturbation technique. So it follows the principles of data perturbation. 

For example in a Microsoft proposed data randomization technique the data is randomized by storing the XORed data with another field instead of the original data. This provides the dataset probabilistic protection and the individual data become harder to infer and link.`,
	},
	{
		id: "clo",
		name: "Data Cloacking",
		arr: [1, 2, 3, 2, 2, 2, 3, 2, 2, 0, 1, 3, 2],
		info: ``,
		how: ``,
	},
	{
		id: "mas",
		name: "Data Masking",
		arr: [1, 1, 3, 2, 2, 2, 3, 2, 2, 0, 1, 3, 2],
		info: ``,
		how: ``,
	},
	{
		id: "syn",
		name: "Synthetic Data Generation",
		arr: [1, 3, 3, 2, 2, 1, 1, 2, 2, 0, 1, 1, 2],
		info: `Synthetic data generation or random data generation is a technique to computationally generate random/fake data that would closely resemble the real data in a particular use case.

For example you want to train your fancy new artificially intelligent video filter app that recognizes faces in a video and apply funny animal filters on it on the fly. To teach your algorithm, you would need tons of facial data of humans of different race, color, ethnicity, and features. However managing a lot of data for this situation can be hard. Not to mention the privacy implications. However, you don’t really need facial data of actual human beings to train your data. You can use AI generated images sets to train your algorithm and it would work as if it is fed real data.`,
		how: `There are many ways to generate synthetic data depending on the use cases. For example if you need to train a machine learning model that recognizes hand waving in a video, you can use Deepfake to generate data sets for this training purpose. 

To start with you’d need some actual video footage of people waving hands and some images of artificially generated people. Then Deepfake will use these two data to create a doctored version of videos where those persons in the artificially created images will be seen waving their hand. Deepfake will make sure their bodily features are reflected in the new video. Now can use these synthetic videos to train your application; without sacrificing anyone’s privacy.`,
	},
];
