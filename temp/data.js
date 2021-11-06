const companies = [
	{ id: "29c54ff6-88ee-4763-bdf9-9a3a0967ba97", name: "Blob GmbH" },
	{ id: "ea225889-21cb-4573-aa3f-c9338f736c3c", name: "Goose AG" },
]

const projects = [
	{ id: "9ec7accf-afba-4dd9-8871-05acda14c511", name: "Blob Mobile App", company: "29c54ff6-88ee-4763-bdf9-9a3a0967ba97" },
	{ id: "3b3c1ccc-a6db-4e69-99de-1efeaebfce40", name: "Datenschutz & Legal Blob", company: "29c54ff6-88ee-4763-bdf9-9a3a0967ba97" },
	{ id: "8ca265ec-5272-45b0-82b6-1add0db1a6d7", name: "Goose Event Weihnachten Webseite", company: "ea225889-21cb-4573-aa3f-c9338f736c3c" },
]

const users = [
	{ id: "0f81b286-3b80-4141-b88c-08a33bdb1558", name: "Olaf Wick", company: "29c54ff6-88ee-4763-bdf9-9a3a0967ba97", projecst: ["9ec7accf-afba-4dd9-8871-05acda14c511", "3b3c1ccc-a6db-4e69-99de-1efeaebfce40"] },
	{ id: "a6d18cd1-a59b-4456-af11-8a110671b783", name: "Hannah Mueller", company: "29c54ff6-88ee-4763-bdf9-9a3a0967ba97", projecst: ["3b3c1ccc-a6db-4e69-99de-1efeaebfce40"] },
	{ id: "a5555a7e-9b7e-4891-a60b-975c5c5ade8b", name: "Peter Tall", company: "ea225889-21cb-4573-aa3f-c9338f736c3c", projecst: ["8ca265ec-5272-45b0-82b6-1add0db1a6d7"] },
]


export default {companies, projects, users};
