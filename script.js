const STORAGE_KEY = "aiTechWeekBootcampStateV2";
const READ_XP = 20;
const CORRECT_XP = 10;
const FINAL_XP = 12;

const EN_TEXT = {
  "计算机与软件地图": "Computer and Software Map",
  "把文件、浏览器、服务器、数据库、API、AI 模型放到同一张图里": "Put files, browsers, servers, databases, APIs, and AI models into one system map.",
  "说出网页背后的前端、后端、数据库和模型": "Describe the frontend, backend, database, and model behind a web app.",
  "解释一次 AI 工具请求的完整链路": "Explain the full path of one AI tool request.",
  "知道本地、服务器、云服务的边界": "Understand the boundary between local files, servers, and cloud services.",
  "1. 先看系统，不急着学语法": "1. See the System First, Do Not Rush Into Syntax",
  "零基础最容易迷路，是因为把“浏览器、代码、服务器、数据库、AI 模型”当成孤立名词。真正的学习顺序应该是：先知道它们分别负责什么，再看它们怎么传递数据。网页按钮只是入口，背后通常是前端收集输入，后端处理请求，数据库保存资料，AI 模型生成内容。": "Beginners often get lost because they treat browsers, code, servers, databases, and AI models as isolated words. A better order is to first understand what each part is responsible for, then see how data moves between them. A web button is only the entrance; behind it, the frontend collects input, the backend handles requests, the database stores data, and the AI model generates content.",
  "2. 文件、路径和浏览器": "2. Files, Paths, and Browsers",
  "文件是内容的容器，路径是找到文件的地址。浏览器不仅能打开网页，还会读取 HTML 结构、CSS 样式和 JavaScript 交互。你现在打开的 index.html，就是浏览器在本机读取文件并执行脚本。": "A file is a container for content, and a path is the address used to find that file. A browser does more than open web pages: it reads HTML structure, CSS styles, and JavaScript interactions. The index.html file you are opening now is being read and run locally by the browser.",
  "3. 前端、后端、服务器、数据库": "3. Frontend, Backend, Server, and Database",
  "前端负责用户看到和点击的部分；后端负责更安全、更复杂的处理；服务器是运行后端服务的电脑；数据库负责长期保存资料。一个真实 AI 应用通常不会把 API Key 放在前端，而是让后端安全地调用模型。": "The frontend is what users see and click. The backend handles safer and more complex work. A server is the computer or environment running backend services. A database stores data for the long term. A real AI app usually does not put an API key in the frontend; the backend calls the model securely.",
  "最小流程": "Minimum Flow",
  "用户输入问题 → 浏览器运行前端代码 → 前端向后端 API 发请求 → 后端检查权限和格式 → 后端调用 AI 模型 → 模型返回文本 → 后端整理结果 → 前端展示给用户。": "User enters a question → the browser runs frontend code → the frontend sends a request to the backend API → the backend checks permissions and format → the backend calls the AI model → the model returns text → the backend organizes the result → the frontend displays it to the user.",
  "Python 代码阅读基础": "Python Code Reading Basics",
  "看懂变量、字符串、列表、字典、函数、条件、循环和调试思维": "Understand variables, strings, lists, dictionaries, functions, conditions, loops, and debugging thinking.",
  "读懂一段小 Python 在做什么": "Understand what a small Python snippet is doing.",
  "知道数据类型和结构的基本区别": "Know the basic differences between data types and data structures.",
  "能让 AI 逐行解释代码并验证输出": "Ask AI to explain code line by line and verify the output.",
  "1. 代码是可执行的说明书": "1. Code Is an Executable Instruction Manual",
  "代码不是神秘语言，而是把步骤写到足够精确。变量负责给数据起名，函数负责把步骤打包，条件判断负责分岔，循环负责重复。网页事件先理解概念即可，本周写代码统一用 Python。": "Code is not a mysterious language; it is a way to write steps precisely enough for a computer to execute. Variables name data, functions package steps, conditions create branches, and loops repeat work. Understand web events as a concept for now; coding practice this week uses Python.",
  "2. 数据结构的最小地图": "2. A Minimal Map of Data Structures",
  "字符串是一段文字，数字用于计算，布尔值表示真假，列表是一排有顺序的东西，字典是一组带名字的资料。JSON 很像 Python 字典和列表，是 API 传数据时常见的格式。": "A string is text, a number is used for calculation, a boolean means true or false, a list is an ordered group, and a dictionary is named data. JSON looks like Python dictionaries and lists, and is a common format for API data.",
  "3. DOM 与事件": "3. DOM and Events",
  "网页交互由浏览器里的 JavaScript 负责；当前阶段只理解“按钮、输入框、结果区域会互相连接”，不用先写这些代码。编程练习统一用 Python。": "Web interactions are handled by JavaScript in the browser. At this stage, only understand that buttons, inputs, and result areas connect to each other; you do not need to write this code yet. Coding practice uses Python first.",
  "4. 调试思维": "4. Debugging Mindset",
  "不要只问 AI“哪里错了”。更好的方式是：描述期望、实际结果、错误信息、相关代码，并让 AI 给出最小修改。改完后自己运行验证。": "Do not only ask AI, “What is wrong?” A better way is to describe the expected result, the actual result, the error message, and the relevant code, then ask AI for the smallest possible fix. After editing, run it yourself to verify.",
  "网络与 API": "Networking and APIs",
  "理解请求、响应、状态码、JSON、鉴权和 API Key 风险": "Understand requests, responses, status codes, JSON, authentication, and API key risks.",
  "能解释 API 像服务员的原因": "Explain why an API is like a waiter or service counter.",
  "读懂一个 JSON 响应": "Read a JSON response.",
  "知道 GET/POST 和状态码的基本含义": "Know the basic meaning of GET/POST and status codes.",
  "1. 网络像寄信，但速度很快": "1. Networking Is Like Sending Mail, But Very Fast",
  "域名是好记的名字，DNS 把域名翻译成 IP，浏览器用 HTTP/HTTPS 和服务器说话。HTTPS 会加密传输，适合登录、支付和任何敏感数据。": "A domain name is a memorable name. DNS translates a domain into an IP address. The browser talks to the server using HTTP/HTTPS. HTTPS encrypts transmission and is suitable for login, payment, and sensitive data.",
  "2. 请求与响应": "2. Request and Response",
  "请求包含地址、方法、请求头、可能还有请求体。响应包含状态码、响应头和数据。200 通常表示成功，404 表示没找到，500 表示服务器内部错误。": "A request includes an address, method, headers, and sometimes a body. A response includes a status code, headers, and data. 200 usually means success, 404 means not found, and 500 means an internal server error.",
  "3. GET 与 POST": "3. GET and POST",
  "GET 常用于获取数据，POST 常用于提交数据。调用 AI 模型通常要 POST，因为你要把用户输入、模型参数等内容发给后端。": "GET is often used to fetch data, while POST is often used to submit data. Calling an AI model usually uses POST because you need to send user input and model parameters to the backend.",
  "4. JSON 与鉴权": "4. JSON and Authentication",
  "JSON 是软件之间常用的数据格式。API Key 像门卡，用来证明你有权限调用服务。真实项目里，Key 应该放在后端环境变量里，而不是前端代码。": "JSON is a common data format between software systems. An API key is like an access card that proves you have permission to call a service. In real projects, keys should be stored in backend environment variables, not frontend code.",
  "AI 模型工作逻辑": "How AI Models Work",
  "理解 Prompt、Token、上下文窗口、概率生成、幻觉和验证": "Understand prompts, tokens, context windows, probabilistic generation, hallucinations, and verification.",
  "知道大模型不是查字典，而是基于上下文生成": "Know that large models do not simply look up a dictionary; they generate based on context.",
  "理解 Token 和上下文窗口": "Understand tokens and context windows.",
  "掌握减少幻觉的基本方法": "Learn basic ways to reduce hallucinations.",
  "1. 大模型在做什么": "1. What Large Models Are Doing",
  "大模型根据输入上下文预测接下来最合理的内容。它不是天然知道事实库，也不是每次都能判断自己错了。所以你要给清楚上下文、要求结构化输出，并设计验证步骤。": "A large model predicts the most likely next content based on the input context. It does not naturally know a perfect fact database, and it cannot always tell when it is wrong. You need to provide clear context, request structured output, and design verification steps.",
  "2. Prompt 是任务说明书": "2. A Prompt Is a Task Brief",
  "好的 Prompt 通常包含角色、目标、背景、输入、输出格式、约束、评价标准。比起“帮我写一下”，更好的写法是“基于以下资料，输出三栏表格，并标出不确定信息”。": "A good prompt usually includes role, goal, background, input, output format, constraints, and evaluation criteria. Instead of saying “write this for me,” a better instruction is: “Based on the following material, output a three-column table and mark uncertain information.”",
  "3. Token 与上下文窗口": "3. Tokens and Context Window",
  "Token 是模型处理文本的小单位。上下文窗口是模型一次能看到的内容范围。资料太长时，模型可能看不完或忽略细节，这就是 RAG 等方法出现的原因之一。": "A token is a small unit of text processed by the model. The context window is the range of content the model can see at one time. When material is too long, the model may not see all of it or may ignore details. This is one reason RAG exists.",
  "4. 幻觉与验证": "4. Hallucination and Verification",
  "幻觉是模型生成了看似合理但不一定真实的内容。减少幻觉的方法包括：提供资料来源、要求引用、让它列不确定点、用官方文档核对、用小实验验证代码。": "A hallucination is when a model generates content that sounds reasonable but may not be true. Ways to reduce hallucination include providing sources, requiring citations, asking for uncertainty, checking official documentation, and validating code with small experiments.",
  "用 AI 辅助工作": "Using AI to Support Work",
  "拆任务、写 Prompt、解释代码、改 bug、写文档、生成方案并验证": "Break down tasks, write prompts, explain code, fix bugs, write documents, generate plans, and verify results.",
  "把工作任务拆成 AI 可执行的小步骤": "Break work into small steps AI can help execute.",
  "知道让 AI 当老师而不是代工机器": "Use AI as a teacher, not just a substitute worker.",
  "掌握验证 AI 输出的流程": "Master a workflow for verifying AI output.",
  "1. AI 适合做什么": "1. What AI Is Good At",
  "AI 擅长初稿、解释、改写、分类、总结、生成思路、写样例代码。它不擅长替你承担责任、保证事实绝对正确、理解所有隐含业务背景。": "AI is good at drafts, explanations, rewriting, classification, summarization, idea generation, and sample code. It is not good at taking responsibility for you, guaranteeing perfect factual correctness, or understanding all hidden business context.",
  "2. 任务拆解": "2. Task Breakdown",
  "把“大任务”拆成目标、输入资料、输出格式、限制条件、检查标准。AI 不怕你要求严格，怕的是你说得模糊。": "Break a big task into goal, input materials, output format, constraints, and checking criteria. AI does not mind strict requirements; it struggles with vague instructions.",
  "3. 用 AI 学代码": "3. Learn Code With AI",
  "不要只让 AI 给答案。让它逐行解释、指出变量如何变化、给最小例子、列出可能 bug、告诉你如何验证。": "Do not only ask AI for the answer. Ask it to explain line by line, show how variables change, give a minimal example, list possible bugs, and explain how to verify the result.",
  "4. 工作流范式": "4. Workflow Pattern",
  "常用流程：先让 AI 提问澄清 → 生成结构化方案 → 人工补充背景 → AI 生成初稿 → 人工核查事实 → AI 改写成最终格式。": "A common workflow: ask AI to clarify questions → generate a structured plan → add human background → let AI draft → verify facts manually → ask AI to rewrite into the final format.",
  "AI 应用架构": "AI Application Architecture",
  "Embedding、RAG、向量数据库、Agent、Tool calling 与真实产品架构": "Embedding, RAG, vector databases, agents, tool calling, and real product architecture.",
  "理解 RAG 为什么像开卷考试": "Understand why RAG is like an open-book exam.",
  "知道 Agent 和普通聊天的区别": "Know the difference between an agent and ordinary chat.",
  "能描述一个 AI 应用的基本架构": "Describe the basic architecture of an AI application.",
  "1. 为什么需要 RAG": "1. Why RAG Is Needed",
  "模型本身不一定知道你的私有资料，也可能知识过期。RAG 的思路是：先根据问题检索相关资料，再把资料放进上下文，让模型基于资料回答。": "The model itself may not know your private data, and its knowledge may be outdated. RAG works by first retrieving relevant material based on the question, then putting that material into the context so the model can answer based on it.",
  "2. Embedding 与向量数据库": "2. Embedding and Vector Database",
  "Embedding 把文字变成数字向量，让系统能比较语义相似度。向量数据库负责保存这些向量，并快速找出和问题最相关的资料片段。": "Embedding turns text into numerical vectors so the system can compare semantic similarity. A vector database stores these vectors and quickly finds the text chunks most relevant to the question.",
  "3. Agent 与 Tool calling": "3. Agent and Tool Calling",
  "Agent 不只是回答一句话，而是围绕目标拆步骤、选择工具、观察结果、继续行动。Tool calling 是让模型按结构化方式请求调用外部工具，比如搜索、查数据库、发邮件。": "An agent does more than answer one sentence. It breaks a goal into steps, chooses tools, observes results, and continues acting. Tool calling lets the model request external tools in a structured way, such as search, database lookup, or email.",
  "4. 真实产品常见架构": "4. Common Architecture of Real Products",
  "前端收集输入，后端管理权限和密钥，检索系统找资料，模型生成回答，日志系统记录问题，评估系统检查质量。越接近真实业务，越要重视隐私、安全和可追溯。": "The frontend collects input, the backend manages permissions and keys, the retrieval system finds material, the model generates answers, logs record problems, and evaluation checks quality. The closer you get to real business, the more privacy, security, and traceability matter.",
  "综合项目：AI 工作助手": "Capstone Project: AI Work Assistant",
  "完成需求文档、流程图、Prompt、模拟工具和下一步路线": "Complete a requirement document, flow diagram, prompt, prototype, and next-step roadmap.",
  "写出 AI 工具需求文档": "Write an AI tool requirement document.",
  "画出从输入到输出的数据流": "Draw the data flow from input to output.",
  "知道从模拟原型升级到真实 API 的步骤": "Know the steps from a simulated prototype to a real API.",
  "1. 从需求开始": "1. Start From Requirements",
  "不要先问“用什么模型”，先问“给谁用、解决什么问题、输入是什么、输出是什么、如何判断好坏”。需求清楚，技术选择才有意义。": "Do not first ask “Which model should I use?” First ask: who is it for, what problem does it solve, what is the input, what is the output, and how do we judge quality? Clear requirements make technical choices meaningful.",
  "2. 原型的价值": "2. The Value of a Prototype",
  "模拟原型可以先验证交互和流程：用户是否知道输入什么？结果是否可读？下一步是否明确？等流程跑顺，再接真实 API。": "A simulated prototype can first validate interaction and flow: does the user know what to enter? Is the result readable? Is the next step clear? Once the flow works, connect a real API.",
  "3. 风险清单": "3. Risk Checklist",
  "AI 工具要考虑隐私、事实错误、版权、偏见、成本、延迟和失败兜底。入门阶段至少要知道：敏感信息不能随便发，AI 输出要验证，API Key 不能放前端。": "AI tools must consider privacy, factual errors, copyright, bias, cost, latency, and fallback behavior. At the beginner stage, at least know this: do not casually send sensitive information, verify AI output, and never put an API key in the frontend.",
  "4. 下一步路线": "4. Next-Step Roadmap",
  "从静态原型到真实应用：前端页面 → 后端接口 → 安全保存密钥 → 调用模型 API → 加载/错误状态 → 日志与评估 → 部署。": "From static prototype to real application: frontend page → backend API → securely store keys → call model API → loading/error states → logs and evaluation → deployment.",
  "5. 一个 AI 产品不是只有“模型”": "5. An AI Product Is Not Just a Model",
  "真实 AI 产品通常由界面、业务逻辑、数据存储、模型调用和安全策略组成。模型负责生成内容，但谁能用、输入怎么检查、结果怎么展示、错误怎么处理，都是应用层要解决的问题。": "A real AI product usually consists of interface, business logic, data storage, model calls, and security policies. The model generates content, but who can use it, how inputs are checked, how results are displayed, and how errors are handled are all application-layer problems.",
  "5. 看代码先看数据怎么流动": "5. When Reading Code, First Follow the Data",
  "读 Python 代码时不要逐字硬啃。先找输入从哪里来，再看它被保存到哪个变量，经过哪个函数处理，最后是 print 出来、保存成数据，还是通过 requests 发到 API。": "When reading Python code, do not chew through every word first. Start by finding where the input comes from, which variable stores it, which function processes it, and whether it is printed, saved as data, or sent to an API with requests.",
  "5. API 的全称与边界": "5. API Full Name and Boundaries",
  "API 是 Application Programming Interface，中文是应用程序编程接口。它不是某个具体网站，也不等于数据库，而是一套软件之间沟通的约定：你按什么地址、方法、格式提交请求，对方按什么格式返回结果。": "API means Application Programming Interface. It is not a specific website, and it is not a database. It is a set of rules for communication between software systems: what address, method, and format you use to send a request, and what format the other side returns.",
  "6. 一次 API 请求到底经过什么": "6. What Happens During One API Request",
  "用 Python 调 API 时，常见流程是：准备输入 → 用 requests 发送 HTTPS 请求 → 服务检查权限和参数 → 服务处理数据或调用模型 → 返回 JSON。你看到的结果只是最后一步。": "When calling an API with Python, the common flow is: prepare input → send an HTTPS request with requests → the service checks permissions and parameters → the service processes data or calls a model → returns JSON. The result you see is only the last step.",
  "5. AI、ML、LLM、NLP 的层级关系": "5. The Relationship Between AI, ML, LLM, and NLP",
  "AI 是人工智能的大范围概念；ML 是 Machine Learning，机器学习，是让系统从数据中学规律；NLP 是 Natural Language Processing，自然语言处理，关注语言理解和生成；LLM 是 Large Language Model，大语言模型，是现在常见聊天 AI 的核心类型。": "AI is the broad concept of artificial intelligence. ML means Machine Learning, where systems learn patterns from data. NLP means Natural Language Processing, focused on language understanding and generation. LLM means Large Language Model, a core type behind many chat-style AI tools.",
  "6. 为什么模型会出错": "6. Why Models Make Mistakes",
  "LLM 擅长根据上下文生成像样的文本，但它不天然知道你的事实是否最新、资料是否完整、业务规则是否隐藏。越是事实、法律、医学、财务和内部业务结论，越需要来源、验证和人工判断。": "LLMs are good at generating plausible text from context, but they do not automatically know whether facts are current, whether material is complete, or whether business rules are hidden. The more a result involves facts, law, medicine, finance, or internal business judgment, the more it needs sources, verification, and human review.",
  "5. 只用 Prompt、调用 API、做 RAG、做 Agent 的判断": "5. When to Use Prompt, API, RAG, or Agent",
  "一次性写作、解释、改写，通常先用 Prompt。需要接入产品、反复自动调用，就需要 API。需要回答私有资料或长文档问题，考虑 RAG。需要多步骤计划、调用工具、观察结果再继续，才考虑 Agent。": "For one-off writing, explaining, or rewriting, start with a prompt. If it needs to be integrated into a product and called repeatedly, use an API. If it needs to answer questions about private data or long documents, consider RAG. If it needs multi-step planning, tool use, observation, and continuation, consider an agent.",
  "5. RAG 的全称与核心思想": "5. RAG Full Name and Core Idea",
  "RAG 是 Retrieval-Augmented Generation，中文常译为检索增强生成。Retrieval 是检索，Augmented 是增强，Generation 是生成。它的核心不是让模型“记住所有资料”，而是先把相关资料找出来，再让模型基于资料回答。": "RAG means Retrieval-Augmented Generation. Retrieval means finding relevant material, Augmented means strengthening the context, and Generation means producing an answer. The core idea is not to make the model memorize everything, but to retrieve relevant material first and then answer based on it.",
  "6. RAG、Embedding、向量数据库的关系": "6. Relationship Between RAG, Embedding, and Vector Database",
  "Embedding 把文本变成数字向量；向量数据库保存并搜索这些向量；RAG 用搜索结果增强模型回答。三者关系是：Embedding 让资料可搜索，向量库负责找相关内容，RAG 把找到的内容交给模型。": "Embedding turns text into numerical vectors. A vector database stores and searches those vectors. RAG uses search results to strengthen the model's answer. In short: embedding makes material searchable, the vector database finds relevant content, and RAG passes that content to the model.",
  "7. Agent 不是更高级的聊天，而是多步骤执行": "7. An Agent Is Not Just Better Chat; It Is Multi-Step Execution",
  "Agent 的重点是目标、计划、工具、观察和迭代。它可以先查资料、再调用系统、再根据结果继续下一步。但它也更容易放大错误，所以必须有权限边界、日志和人工确认点。": "An agent focuses on goals, plans, tools, observation, and iteration. It can search first, call a system, then continue based on results. But it can also amplify mistakes, so it needs permission boundaries, logs, and human confirmation points.",
  "5. 从模拟原型升级为真实 AI 产品的判断清单": "5. Checklist for Upgrading a Simulation Into a Real AI Product",
  "如果只是练习交互，用静态页面即可。如果要让多人使用，需要部署。如果要调用真实模型，需要后端。如果要查内部资料，需要 RAG。如果要自动做多步任务，需要工作流或 Agent。如果涉及客户、合同、财务、医疗、法律，必须有人审。": "If you only want to practice interaction, a static page is enough. If many people need to use it, deploy it. If it calls a real model, add a backend. If it searches internal material, use RAG. If it automates multi-step tasks, use a workflow or agent. If it involves customers, contracts, finance, medicine, or law, human review is required."
};

Object.assign(EN_TEXT, {
  "计算机基础": "Computer Basics",
  "网络/API": "Networking / API",
  "Python 编程基础": "Python Programming Basics",
  "网页概念基础": "Web Concept Basics",
  "AI 基础": "AI Basics",
  "AI 应用架构": "AI Application Architecture",
  "工程安全": "Engineering Safety",
  "低": "Low",
  "中": "Medium",
  "高": "High",
  "中高": "Medium-high",
  "API 请求链路": "API Request Flow",
  "从按钮点击到后端返回 JSON，API 是前端和服务之间的约定边界。": "From clicking a button to receiving JSON from the backend, the API is the contract boundary between the frontend and the service.",
  "用户点击按钮": "User clicks a button",
  "Python 脚本或网页收集输入": "A Python script or web page collects input",
  "requests 或后端发起 HTTPS 请求": "requests or a backend sends an HTTPS request",
  "后端 API 校验权限和参数": "Backend API checks permissions and parameters",
  "服务处理或调用模型": "Service processes data or calls a model",
  "返回 JSON": "Return JSON",
  "前端渲染结果": "Frontend renders the result",
  "能说清 GET/POST、URL、JSON、状态码和 API Key 放在哪里。": "Be able to explain GET/POST, URL, JSON, status codes, and where an API key should be stored.",
  "RAG 工作流": "RAG Workflow",
  "RAG 不是让模型凭空知道资料，而是先检索，再把资料放进上下文。": "RAG does not make the model magically know your data; it retrieves relevant material first and places it into the context.",
  "用户提问": "User asks a question",
  "问题转成 Embedding": "Question becomes an embedding",
  "向量数据库检索相关片段": "Vector database retrieves relevant chunks",
  "片段进入上下文窗口": "Chunks enter the context window",
  "LLM 基于资料生成": "LLM generates based on the material",
  "显示来源并人工验证": "Show sources and verify manually",
  "能解释 Retrieval、Augmented、Generation 分别是什么意思。": "Be able to explain what Retrieval, Augmented, and Generation mean.",
  "AI 应用架构": "AI Application Architecture",
  "真实 AI 产品通常是前端、后端、数据、模型、安全和评估的组合。": "A real AI product is usually a combination of frontend, backend, data, model, safety, and evaluation.",
  "前端界面": "Frontend interface",
  "后端接口": "Backend API",
  "权限和 API Key": "Permissions and API key",
  "资料库/数据库": "Knowledge base / database",
  "模型 API": "Model API",
  "日志与质量评估": "Logs and quality evaluation",
  "错误兜底": "Error fallback",
  "能判断一个需求只要 Prompt、需要 API、需要 RAG，还是需要 Agent。": "Be able to judge whether a requirement only needs a prompt, an API, RAG, or an agent.",
  "从静态网页到真实 AI 产品": "From Static Web Page to Real AI Product",
  "先用模拟原型验证流程，再逐步接入后端和真实模型。": "Use a simulated prototype to validate the flow first, then connect a backend and real model step by step.",
  "本地静态原型": "Local static prototype",
  "设计输入输出": "Design input and output",
  "增加后端接口": "Add backend API",
  "密钥放环境变量": "Store keys in environment variables",
  "调用模型 API": "Call model API",
  "处理加载/错误/费用": "Handle loading, errors, and cost",
  "部署与监控": "Deploy and monitor",
  "能说清为什么不能把真实 API Key 放在 index.html。": "Be able to explain why a real API key must not be placed in index.html.",
  "Python 字数统计器": "Python Word Counter",
  "输入一段文字，统计字数、字符数和关键词。": "Enter text and count words, characters, and keywords.",
  "Python、字符串、字典、函数": "Python, strings, dictionaries, functions",
  "让 AI 解释每一行 Python，再由你运行验证。": "Ask AI to explain each line of Python, then run it yourself to verify.",
  "文章总结模拟器": "Article Summary Simulator",
  "输入文章，输出摘要、关键词、待核查事实。": "Enter an article and output a summary, keywords, and facts to verify.",
  "文本处理、结果展示": "Text processing and result display",
  "让 AI 帮你设计摘要格式。": "Ask AI to help design the summary format.",
  "Prompt 评估表": "Prompt Evaluation Sheet",
  "给 Prompt 打分：目标、背景、格式、限制是否清楚。": "Score a prompt: whether goal, background, format, and constraints are clear.",
  "表单、评分规则": "Forms and scoring rules",
  "让 AI 给评分标准初稿。": "Ask AI to draft the scoring criteria.",
  "JSON 观察器": "JSON Inspector",
  "输入 JSON，解释每个字段含义。": "Enter JSON and explain the meaning of each field.",
  "字典、列表、JSON": "Dictionaries, lists, JSON",
  "让 AI 帮你生成样例数据。": "Ask AI to generate sample data.",
  "真实 AI 总结工具": "Real AI Summary Tool",
  "后端保护密钥，Python 或前端提交文本，模型返回总结。": "The backend protects the key, Python or the frontend submits text, and the model returns a summary.",
  "Python requests、API、POST、后端、密钥安全": "Python requests, API, POST, backend, key safety",
  "让 AI 拆接口和错误处理。": "Ask AI to break down the API and error handling.",
  "个人知识库 RAG": "Personal Knowledge Base RAG",
  "上传资料，检索相关片段后回答。": "Upload material, retrieve relevant chunks, and answer based on them.",
  "Embedding、向量数据库、RAG": "Embedding, vector database, RAG",
  "让 AI 帮你设计资料切分。": "Ask AI to help design document chunking.",
  "工作流 Agent": "Workflow Agent",
  "把一个工作任务拆成多步，并调用工具。": "Break a work task into multiple steps and call tools.",
  "Agent、Tool calling、日志": "Agent, tool calling, logs",
  "让 AI 帮你列风险和评估指标。": "Ask AI to list risks and evaluation metrics.",
  "AI 输出质检器": "AI Output Quality Checker",
  "检查摘要是否有来源、是否遗漏、是否有不确定点。": "Check whether a summary has sources, omissions, and uncertain points.",
  "评估、校验、Prompt": "Evaluation, validation, prompt",
  "让 AI 生成检查清单。": "Ask AI to generate a checklist."
});

const courseDays = [
  {
    id: "day1",
    day: "Day 1",
    title: "计算机与软件地图",
    subtitle: "把文件、浏览器、服务器、数据库、API、AI 模型放到同一张图里",
    badge: "技术地图师",
    objectives: ["说出网页背后的前端、后端、数据库和模型", "解释一次 AI 工具请求的完整链路", "知道本地、服务器、云服务的边界"],
    sections: [
      {
        heading: "1. 先看系统，不急着学语法",
        body: "零基础最容易迷路，是因为把“浏览器、代码、服务器、数据库、AI 模型”当成孤立名词。真正的学习顺序应该是：先知道它们分别负责什么，再看它们怎么传递数据。网页按钮只是入口，背后通常是前端收集输入，后端处理请求，数据库保存资料，AI 模型生成内容。"
      },
      {
        heading: "2. 文件、路径和浏览器",
        body: "文件是内容的容器，路径是找到文件的地址。浏览器不仅能打开网页，还会读取 HTML 结构、CSS 样式和 JavaScript 交互。你现在打开的 index.html，就是浏览器在本机读取文件并执行脚本。"
      },
      {
        heading: "3. 前端、后端、服务器、数据库",
        body: "前端负责用户看到和点击的部分；后端负责更安全、更复杂的处理；服务器是运行后端服务的电脑；数据库负责长期保存资料。一个真实 AI 应用通常不会把 API Key 放在前端，而是让后端安全地调用模型。"
      },
      {
        heading: "最小流程",
        body: "用户输入问题 → 浏览器运行前端代码 → 前端向后端 API 发请求 → 后端检查权限和格式 → 后端调用 AI 模型 → 模型返回文本 → 后端整理结果 → 前端展示给用户。"
      }
    ],
    exercises: [
      single("d1-e1", "单选题：浏览器在这个静态网站里主要负责什么？", ["保存所有用户数据到云端", "读取 HTML/CSS/JS 并把页面展示出来", "训练 AI 模型", "管理数据库权限"], 1, "浏览器负责解析网页文件并运行前端 JavaScript。"),
      multi("d1-e2", "多选题：真实 AI 应用里通常会出现哪些角色？", ["前端页面", "后端 API", "数据库或资料存储", "AI 模型", "把 API Key 写在公开网页里"], [0, 1, 2, 3], "公开网页里不能放密钥；其他四项都是常见角色。"),
      order("d1-e3", "排序题：用户点击网页按钮后，AI 返回结果的合理顺序是？", ["AI 模型生成答案", "浏览器收集输入", "后端 API 接收请求", "前端展示结果"], [1, 2, 0, 3], "先由浏览器/前端收集输入，再发到后端，后端调用模型，最后前端展示结果。"),
      fill("d1-e4", "填空题：找到文件在电脑中位置的地址叫做____。", ["路径", "path"], "路径像文件的快递地址。"),
      single("d1-e5", "网页概念题：HTML 在网页里主要负责什么？", ["描述页面结构", "长期保存用户数据", "训练 AI 模型", "解析域名成 IP"], 0, "HTML 负责结构，例如标题、按钮、输入框和章节。网页交互背后的 JavaScript 以后再学。"),
      single("d1-e6", "场景题：你要保存用户历史记录，最适合放在哪里？", ["按钮文字里", "数据库或本地存储", "标题标签里", "CSS 颜色变量里"], 1, "历史记录是数据，需要进入数据存储，而不是样式或文案。")
    ],
    quiz: [
      single("d1-q1", "章节测验：前端最接近负责哪件事？", ["用户界面和交互", "长期保存数据", "模型训练", "域名解析"], 0, "前端负责页面展示和交互。"),
      single("d1-q2", "章节测验：服务器可以理解为？", ["只能显示图片的软件", "提供服务的远程电脑", "一个字体文件", "浏览器插件"], 1, "服务器本质上是提供服务的计算机或进程。"),
      multi("d1-q3", "章节测验：哪些属于数据流的一部分？", ["用户输入", "API 请求", "模型返回结果", "按钮圆角"], [0, 1, 2], "按钮圆角是样式，不是数据流。"),
      fill("d1-q4", "章节测验：软件之间按约定沟通的接口叫____。", ["API", "api", "接口"], "API 是应用之间沟通的约定。"),
      single("d1-q5", "章节测验：为什么不能把真实 API Key 放在公开网页？", ["会让字体变丑", "别人能看到并滥用", "浏览器无法运行", "JSON 不支持"], 1, "公开前端代码人人可见，密钥会泄露。")
    ],
    reflection: "用自己的话写 3 句：一个 AI 网页工具从输入到输出经历了哪些角色？参考答案：前端收集输入，后端保护密钥并调用模型，模型生成结果，前端展示。"
  },
  {
    id: "day2",
    day: "Day 2",
    title: "Python 代码阅读基础",
    subtitle: "看懂变量、字符串、列表、字典、函数、条件、循环和调试思维",
    badge: "代码阅读者",
    objectives: ["读懂一段小 Python 在做什么", "知道字符串、数字、布尔值、列表、字典的区别", "能让 AI 逐行解释 Python 并验证输出"],
    sections: [
      { heading: "1. Python 是先学编程思维的好入口", body: "Python 写法接近日常语言，适合先理解“数据怎么保存、步骤怎么执行、条件怎么分支、循环怎么重复”。网页背后的交互以后再学 JavaScript；这一周先用 Python 建立代码阅读力。" },
      { heading: "2. 数据结构的最小地图", body: "字符串是一段文字，数字用于计算，布尔值表示真假，列表是一排有顺序的东西，字典是一组带名字的资料。JSON 很像 Python 字典和列表，是 API 传数据时常见的格式。" },
      { heading: "3. 函数、条件和循环", body: "函数用 def 把步骤打包；if/else 根据条件走不同分支；for 可以逐个处理列表里的项目。读 Python 时先找输入、变量、函数、输出，不要逐字硬背。" },
      { heading: "4. 调试思维", body: "不要只问 AI“哪里错了”。更好的方式是：描述期望、实际结果、错误信息、相关 Python 代码，并让 AI 给出最小修改。改完后自己运行验证。" }
    ],
    exercises: [
      single("d2-e1", "单选题：变量最像什么？", ["给一个值贴标签", "给服务器买内存", "把网页变成图片", "域名解析"], 0, "变量就是给数据起名字，方便后面使用。"),
      multi("d2-e2", "多选题：哪些是 Python 常见数据结构或类型？", ["字符串", "列表", "字典", "CSS 阴影"], [0, 1, 2], "CSS 阴影是网页样式，不是 Python 数据类型。"),
      order("d2-e3", "排序题：Python 读取文字并统计长度的合理顺序？", ["准备 text 变量", "用 len(text) 计算长度", "把结果保存到 count", "print(count) 输出结果"], [0, 1, 2, 3], "先准备输入，再计算，再保存结果，最后输出。"),
      fill("d2-e4", "填空题：Python 定义函数常用关键字____。", ["def"], "def 用来定义函数。"),
      single("d2-e5", "代码读懂题：len(['AI', 'API']) 的结果是？", ["1", "2", "AIAPI", "报错"], 1, "列表里有两个元素，所以 len(...) 是 2。"),
      single("d2-e6", "场景题：AI 给你一段代码，你最应该先做什么？", ["直接发布", "让它逐行解释并在本地运行验证", "删除所有注释", "把 API Key 发给它"], 1, "理解和验证是用 AI 学代码的关键。")
    ],
    quiz: [
      single("d2-q1", "章节测验：函数的作用更像？", ["把一组步骤打包成可重复调用的工具", "保存网页颜色", "购买域名", "压缩图片"], 0, "函数用于组织可重复的逻辑。"),
      fill("d2-q2", "章节测验：Python 里保存一组有顺序数据的结构叫____。", ["列表", "list", "List"], "列表适合保存一排有顺序的数据。"),
      single("d2-q3", "章节测验：user = {'name': 'Ann'} 中 user 是？", ["列表", "字典", "函数", "HTTP 方法"], 1, "带键值对的是字典。"),
      multi("d2-q4", "章节测验：调试时应该提供给 AI 什么？", ["期望结果", "实际结果", "错误信息", "无关截图越多越好"], [0, 1, 2], "清楚的上下文比大量无关信息更有用。"),
      single("d2-q5", "章节测验：print(count) 通常用于？", ["把变量结果输出给你看", "训练模型", "解析域名", "创建 API Key"], 0, "print 可以把运行结果显示出来，适合初学调试。")
    ],
    reflection: "写一段自查：变量、函数、循环分别解决什么问题？参考答案：变量存数据，函数打包步骤，循环重复处理列表里的项目。"
  },
  {
    id: "day3",
    day: "Day 3",
    title: "网络与 API",
    subtitle: "理解请求、响应、状态码、JSON、鉴权和 API Key 风险",
    badge: "API 入门者",
    objectives: ["能解释 API 像服务员的原因", "读懂一个 JSON 响应", "知道 GET/POST 和状态码的基本含义"],
    sections: [
      { heading: "1. 网络像寄信，但速度很快", body: "域名是好记的名字，DNS 把域名翻译成 IP，浏览器用 HTTP/HTTPS 和服务器说话。HTTPS 会加密传输，适合登录、支付和任何敏感数据。" },
      { heading: "2. 请求与响应", body: "请求包含地址、方法、请求头、可能还有请求体。响应包含状态码、响应头和数据。200 通常表示成功，404 表示没找到，500 表示服务器内部错误。" },
      { heading: "3. GET 与 POST", body: "GET 常用于获取数据，POST 常用于提交数据。调用 AI 模型通常要 POST，因为你要把用户输入、模型参数等内容发给后端。" },
      { heading: "4. JSON 与鉴权", body: "JSON 是软件之间常用的数据格式。API Key 像门卡，用来证明你有权限调用服务。真实项目里，Key 应该放在后端环境变量里，而不是前端代码。"}
    ],
    exercises: [
      single("d3-e1", "单选题：DNS 的作用是什么？", ["把域名翻译成 IP", "统计字数", "生成图片", "保存当前浏览器进度"], 0, "DNS 像网络通讯录。"),
      multi("d3-e2", "多选题：一个 HTTP 响应通常可能包含？", ["状态码", "响应数据", "响应头", "你的显示器尺寸"], [0, 1, 2], "显示器尺寸不是 HTTP 响应的核心部分。"),
      order("d3-e3", "排序题：访问 example.com 的合理过程？", ["DNS 查询 IP", "浏览器发 HTTP 请求", "服务器返回响应", "浏览器渲染页面"], [0, 1, 2, 3], "先解析地址，再请求，再响应，再渲染。"),
      fill("d3-e4", "填空题：常见成功状态码是____。", ["200"], "HTTP 200 通常表示成功。"),
      single("d3-e5", "Python 代码读懂题：response.json() 通常是在做什么？", ["把响应解析成 Python 能处理的数据", "关闭浏览器", "创建域名", "清空数据库"], 0, "Python requests 得到响应后，常用 response.json() 读取 JSON 数据。"),
      single("d3-e6", "场景题：调用 AI 生成总结，通常更适合用？", ["POST", "GET", "DNS", "CSS"], 0, "需要提交用户输入，一般用 POST。")
    ],
    quiz: [
      single("d3-q1", "章节测验：HTTPS 比 HTTP 多了什么核心能力？", ["加密传输", "更大的字体", "自动写代码", "不用网络"], 0, "HTTPS 通过 TLS 提供加密与身份验证。"),
      fill("d3-q2", "章节测验：软件之间传递结构化数据常用____格式。", ["JSON", "json"], "JSON 是 API 数据交换常用格式。"),
      single("d3-q3", "章节测验：404 更接近表示？", ["找不到资源", "成功", "权限一定正确", "模型过大"], 0, "404 Not Found。"),
      multi("d3-q4", "章节测验：API Key 安全做法包括？", ["放后端", "用环境变量", "不要提交到公开仓库", "写进 index.html"], [0, 1, 2], "前端公开文件不能放密钥。"),
      single("d3-q5", "章节测验：API 像服务员，是因为？", ["按约定把请求传给服务并返回结果", "它会做饭", "它是数据库", "它负责显示 CSS"], 0, "API 是沟通边界。")
    ],
    reflection: "用自己的话解释一次 POST 请求：谁发、发什么、谁处理、返回什么？"
  },
  {
    id: "day4",
    day: "Day 4",
    title: "AI 模型工作逻辑",
    subtitle: "理解 Prompt、Token、上下文窗口、概率生成、幻觉和验证",
    badge: "模型理解者",
    objectives: ["知道大模型不是查字典，而是基于上下文生成", "理解 Token 和上下文窗口", "掌握减少幻觉的基本方法"],
    sections: [
      { heading: "1. 大模型在做什么", body: "大模型根据输入上下文预测接下来最合理的内容。它不是天然知道事实库，也不是每次都能判断自己错了。所以你要给清楚上下文、要求结构化输出，并设计验证步骤。" },
      { heading: "2. Prompt 是任务说明书", body: "好的 Prompt 通常包含角色、目标、背景、输入、输出格式、约束、评价标准。比起“帮我写一下”，更好的写法是“基于以下资料，输出三栏表格，并标出不确定信息”。" },
      { heading: "3. Token 与上下文窗口", body: "Token 是模型处理文本的小单位。上下文窗口是模型一次能看到的内容范围。资料太长时，模型可能看不完或忽略细节，这就是 RAG 等方法出现的原因之一。" },
      { heading: "4. 幻觉与验证", body: "幻觉是模型生成了看似合理但不一定真实的内容。减少幻觉的方法包括：提供资料来源、要求引用、让它列不确定点、用官方文档核对、用小实验验证代码。"}
    ],
    exercises: [
      single("d4-e1", "单选题：Prompt 最接近什么？", ["给 AI 的任务说明书", "浏览器地址", "数据库密码", "CSS 变量"], 0, "Prompt 决定模型如何理解任务。"),
      multi("d4-e2", "多选题：好 Prompt 通常包含？", ["目标", "输入背景", "输出格式", "故意隐藏关键信息"], [0, 1, 2], "隐藏关键信息会降低输出质量。"),
      order("d4-e3", "排序题：验证 AI 代码建议的合理顺序？", ["让 AI 解释修改原因", "本地运行", "观察错误或结果", "再做最小修正"], [0, 1, 2, 3], "先理解，再运行，再观察，再修正。"),
      fill("d4-e4", "填空题：模型一次能看到的内容范围叫上下文____。", ["窗口"], "上下文窗口决定可见信息范围。"),
      single("d4-e5", "概念判断题：要求 AI 输出 JSON 的主要好处是？", ["更容易被程序读取", "一定不会错", "不需要验证", "可以隐藏密钥"], 0, "结构化输出更适合程序处理，但仍需验证。"),
      single("d4-e6", "场景题：AI 给出一个陌生法律/医学结论，你应该？", ["直接采用", "查可靠来源并请专业人士确认", "只换个语气", "保存到 CSS"], 1, "高风险领域必须验证，不能只信模型。")
    ],
    quiz: [
      single("d4-q1", "章节测验：大模型输出更像？", ["基于上下文生成最可能的文本", "永远查询官方数据库", "只会复制网页", "不需要输入"], 0, "生成式模型核心是基于上下文生成。"),
      fill("d4-q2", "章节测验：AI 编造看似合理但不真实内容，常叫____。", ["幻觉"], "幻觉是使用 AI 时必须管理的风险。"),
      multi("d4-q3", "章节测验：降低幻觉的方法包括？", ["提供资料", "要求列不确定点", "核对官方文档", "禁止用户验证"], [0, 1, 2], "验证是必要步骤。"),
      single("d4-q4", "章节测验：Token 可以粗略理解为？", ["模型处理文本的小单位", "网页按钮", "服务器机箱", "域名"], 0, "Token 是文本被模型处理的单位。"),
      single("d4-q5", "章节测验：结构化输出适合什么场景？", ["要让程序继续读取结果", "想让页面变暗", "隐藏 API Key", "替代所有人工判断"], 0, "JSON/表格等结构化输出便于后续处理。")
    ],
    reflection: "写一个高质量 Prompt 框架：角色、目标、输入、输出格式、限制、检查标准。"
  },
  {
    id: "day5",
    day: "Day 5",
    title: "用 AI 辅助工作",
    subtitle: "拆任务、写 Prompt、解释代码、改 bug、写文档、生成方案并验证",
    badge: "AI 协作者",
    objectives: ["把工作任务拆成 AI 可执行的小步骤", "知道让 AI 当老师而不是代工机器", "掌握验证 AI 输出的流程"],
    sections: [
      { heading: "1. AI 适合做什么", body: "AI 擅长初稿、解释、改写、分类、总结、生成思路、写样例代码。它不擅长替你承担责任、保证事实绝对正确、理解所有隐含业务背景。" },
      { heading: "2. 任务拆解", body: "把“大任务”拆成目标、输入资料、输出格式、限制条件、检查标准。AI 不怕你要求严格，怕的是你说得模糊。" },
      { heading: "3. 用 AI 学代码", body: "不要只让 AI 给答案。让它逐行解释、指出变量如何变化、给最小例子、列出可能 bug、告诉你如何验证。" },
      { heading: "4. 工作流范式", body: "常用流程：先让 AI 提问澄清 → 生成结构化方案 → 人工补充背景 → AI 生成初稿 → 人工核查事实 → AI 改写成最终格式。"}
    ],
    exercises: [
      single("d5-e1", "单选题：让 AI 帮你做工作时，最重要的第一步是？", ["把任务说清楚并拆小", "直接要最终答案", "隐藏背景", "禁止它提问"], 0, "清晰任务是好结果的前提。"),
      multi("d5-e2", "多选题：适合交给 AI 辅助的任务有？", ["总结资料", "生成初稿", "解释代码", "不经验证直接发高风险结论"], [0, 1, 2], "高风险结论必须人工验证。"),
      order("d5-e3", "排序题：AI 辅助写报告的稳妥流程？", ["提供背景和资料", "要求结构化提纲", "生成初稿", "人工核查事实"], [0, 1, 2, 3], "先输入上下文，再结构化，再生成，再核查。"),
      fill("d5-e4", "填空题：让 AI 输出表格、JSON、清单，属于要求____化输出。", ["结构", "结构化"], "结构化输出便于检查和复用。"),
      single("d5-e5", "调试判断题：AI 改 bug 后，你应该？", ["运行并验证是否解决问题", "直接复制上线", "删掉测试", "把错误信息藏起来"], 0, "AI 建议必须用运行结果验证。"),
      single("d5-e6", "场景题：你要让 AI 做竞品分析，最应该补充什么？", ["目标用户、比较维度、资料来源、输出格式", "只说随便写", "只给颜色", "只给一个标题"], 0, "背景和评价标准决定输出质量。")
    ],
    quiz: [
      single("d5-q1", "章节测验：AI 更适合当？", ["协作者和教练", "永远正确的裁判", "密钥仓库", "数据库替代品"], 0, "AI 是协作工具，不是责任替代品。"),
      multi("d5-q2", "章节测验：好工作 Prompt 包括？", ["目标", "资料", "格式", "检查标准"], [0, 1, 2, 3], "这四项都能提高可控性。"),
      fill("d5-q3", "章节测验：AI 输出后，必须做人工____。", ["验证", "核查"], "验证是避免错误扩散的关键。"),
      single("d5-q4", "章节测验：让 AI 解释代码时，哪句话最好？", ["逐行解释变量如何变化，并给最小例子", "你看着办", "直接重写所有文件", "不要解释"], 0, "具体要求更适合学习。"),
      single("d5-q5", "章节测验：结构化输出的优势是？", ["更容易检查和复用", "保证事实全对", "不需要上下文", "隐藏风险"], 0, "结构化不等于绝对正确。")
    ],
    reflection: "选一个真实工作任务，按目标、输入、输出、限制、检查标准写成 Prompt。"
  },
  {
    id: "day6",
    day: "Day 6",
    title: "AI 应用架构",
    subtitle: "Embedding、RAG、向量数据库、Agent、Tool calling 与真实产品架构",
    badge: "应用架构师",
    objectives: ["理解 RAG 为什么像开卷考试", "知道 Agent 和普通聊天的区别", "能描述一个 AI 应用的基本架构"],
    sections: [
      { heading: "1. 为什么需要 RAG", body: "模型本身不一定知道你的私有资料，也可能知识过期。RAG 的思路是：先根据问题检索相关资料，再把资料放进上下文，让模型基于资料回答。" },
      { heading: "2. Embedding 与向量数据库", body: "Embedding 把文字变成数字向量，让系统能比较语义相似度。向量数据库负责保存这些向量，并快速找出和问题最相关的资料片段。" },
      { heading: "3. Agent 与 Tool calling", body: "Agent 不只是回答一句话，而是围绕目标拆步骤、选择工具、观察结果、继续行动。Tool calling 是让模型按结构化方式请求调用外部工具，比如搜索、查数据库、发邮件。" },
      { heading: "4. 真实产品常见架构", body: "前端收集输入，后端管理权限和密钥，检索系统找资料，模型生成回答，日志系统记录问题，评估系统检查质量。越接近真实业务，越要重视隐私、安全和可追溯。"}
    ],
    exercises: [
      single("d6-e1", "单选题：RAG 最像什么？", ["开卷考试", "改按钮颜色", "删除数据库", "购买域名"], 0, "RAG 是先检索资料再回答。"),
      multi("d6-e2", "多选题：RAG 系统常见组件包括？", ["资料库", "Embedding", "检索", "模型生成", "只靠 CSS"], [0, 1, 2, 3], "CSS 不负责资料检索。"),
      order("d6-e3", "排序题：RAG 回答问题的合理流程？", ["用户提问", "检索相关资料", "把资料放入上下文", "模型基于资料回答"], [0, 1, 2, 3], "先问，再查，再放入上下文，再回答。"),
      fill("d6-e4", "填空题：把文本变成便于比较的数字表示，叫____。", ["Embedding", "embedding", "嵌入"], "Embedding 用于语义检索。"),
      single("d6-e5", "Python 风格代码读懂题：tools = ['search'] 暗示模型可能做什么？", ["请求调用搜索工具", "修改字体", "创建列表长度", "关闭 HTTPS"], 0, "Tool calling 让模型请求外部工具。"),
      single("d6-e6", "场景题：公司内部知识库问答，最适合考虑？", ["RAG", "只改页面颜色", "只用 GET 请求", "删除资料来源"], 0, "知识库问答通常需要检索资料。")
    ],
    quiz: [
      single("d6-q1", "章节测验：向量数据库主要用于？", ["按语义相似度找资料", "显示网页标题", "保存 CSS", "解析 DNS"], 0, "向量库服务语义检索。"),
      fill("d6-q2", "章节测验：Agent 像一个会分步骤做事的____。", ["助理"], "Agent 强调目标、步骤和工具。"),
      multi("d6-q3", "章节测验：真实 AI 产品需要考虑？", ["权限", "隐私", "日志", "质量评估"], [0, 1, 2, 3], "真实产品不只是一句模型调用。"),
      single("d6-q4", "章节测验：RAG 能减少幻觉，是因为？", ["提供可参考资料", "让字体更大", "绕过所有验证", "不用模型"], 0, "资料 grounding 能降低凭空生成。"),
      single("d6-q5", "章节测验：Tool calling 的核心是？", ["模型按结构请求外部工具", "用户手动复制答案", "浏览器换皮肤", "数据库关机"], 0, "Tool calling 让模型和工具协作。")
    ],
    reflection: "画一个公司知识库 AI 助手架构：前端、后端、资料库、检索、模型、日志分别做什么？"
  },
  {
    id: "day7",
    day: "Day 7",
    title: "综合项目：AI 工作助手",
    subtitle: "完成需求文档、流程图、Prompt、模拟工具和下一步路线",
    badge: "原型设计者",
    objectives: ["写出 AI 工具需求文档", "画出从输入到输出的数据流", "知道从模拟原型升级到真实 API 的步骤"],
    sections: [
      { heading: "1. 从需求开始", body: "不要先问“用什么模型”，先问“给谁用、解决什么问题、输入是什么、输出是什么、如何判断好坏”。需求清楚，技术选择才有意义。" },
      { heading: "2. 原型的价值", body: "模拟原型可以先验证交互和流程：用户是否知道输入什么？结果是否可读？下一步是否明确？等流程跑顺，再接真实 API。" },
      { heading: "3. 风险清单", body: "AI 工具要考虑隐私、事实错误、版权、偏见、成本、延迟和失败兜底。入门阶段至少要知道：敏感信息不能随便发，AI 输出要验证，API Key 不能放前端。" },
      { heading: "4. 下一步路线", body: "从静态原型到真实应用：前端页面 → 后端接口 → 安全保存密钥 → 调用模型 API → 加载/错误状态 → 日志与评估 → 部署。"}
    ],
    exercises: [
      single("d7-e1", "单选题：设计 AI 工具前最该先明确？", ["用户和问题", "按钮颜色", "模型名字越新越好", "域名长度"], 0, "需求先于技术。"),
      multi("d7-e2", "多选题：AI 工具需求文档应包含？", ["目标用户", "输入/输出", "成功标准", "风险和边界"], [0, 1, 2, 3], "这些都是需求文档核心。"),
      order("d7-e3", "排序题：从静态原型到真实 API 的顺序？", ["跑通静态交互", "设计后端接口", "后端调用模型", "前端展示真实结果"], [0, 1, 2, 3], "先验证交互，再接后端和模型。"),
      fill("d7-e4", "填空题：真实 API Key 不应放在____端公开代码。", ["前", "前端"], "前端代码会被用户看到。"),
      single("d7-e5", "概念题：浏览器存储适合保存什么？", ["当前浏览器里的学习进度", "所有用户云端账号密码", "公开 API Key", "模型权重"], 0, "浏览器存储只适合保存低风险的当前浏览器数据，不适合敏感密钥。"),
      single("d7-e6", "场景题：AI 工具输出了重要商业结论，你应该？", ["用资料和人工复核", "直接发给客户", "只换标题", "删除来源"], 0, "重要结论必须复核。")
    ],
    quiz: [
      single("d7-q1", "章节测验：原型阶段最重要的是？", ["验证流程和理解需求", "承诺完全准确", "隐藏风险", "上线收费"], 0, "原型先验证方向。"),
      multi("d7-q2", "章节测验：AI 应用风险包括？", ["隐私", "幻觉", "成本", "延迟"], [0, 1, 2, 3], "这些都是常见工程和业务风险。"),
      fill("d7-q3", "章节测验：从前端安全调用真实模型，通常需要一个____端接口保护密钥。", ["后", "后端"], "后端负责保护密钥和权限。"),
      single("d7-q4", "章节测验：需求文档里的成功标准用于？", ["判断工具是否真的有用", "改变电脑壁纸", "隐藏错误", "跳过测试"], 0, "成功标准让项目可评估。"),
      single("d7-q5", "章节测验：7 天后最合理的状态是？", ["能理解地图并做原型，继续深入", "已经精通所有工程", "不需要验证 AI", "可以公开密钥"], 0, "目标是专业入门，不是虚假精通。")
    ],
    reflection: "写你的第一个 AI 工作助手需求：目标用户、要解决的问题、输入、输出、成功标准、风险。"
  }
];

const courseDeepening = {
  day1: {
    coreTerms: ["HTML", "CSS", "JavaScript", "API", "Database", "AI Model"],
    sections: [
      {
        heading: "5. 一个 AI 产品不是只有“模型”",
        body: "真实 AI 产品通常由界面、业务逻辑、数据存储、模型调用和安全策略组成。模型负责生成内容，但谁能用、输入怎么检查、结果怎么展示、错误怎么处理，都是应用层要解决的问题。"
      }
    ],
    exercises: [
      single("d1-e7", "缩略词配对：HTML 的英文全称和中文意思是？", ["HyperText Markup Language，超文本标记语言", "High Transfer Model Logic，高传输模型逻辑", "Human Text Machine Layer，人机文本层", "Host Tool Message Link，主机工具消息链接"], 0, "HTML 是网页结构，不是编程逻辑本身。", { category: "缩略词配对", knowledge: "HTML", mistakeHint: "容易把网页三件套混在一起：HTML 管结构，CSS 管样式，JavaScript 管交互。", memory: "HTML 搭骨架，CSS 做外观，JavaScript 让页面动起来。", review: "Day 1 技术地图" }),
      single("d1-e8", "真实工作判断：老板说“做一个内部资料问答工具”，最先应该画清楚什么？", ["用户、资料、前端、后端、检索、模型、验证如何连接", "只挑一个最贵模型", "先把 API Key 写进页面", "只设计按钮颜色"], 0, "先画系统链路，才能判断需要 API、RAG、数据库还是人工审核。", { category: "场景判断", knowledge: "AI 应用架构", mistakeHint: "不要把 AI 产品误解成一个模型调用。", memory: "先画流程，再选技术。", review: "Day 1 最小流程" })
    ]
  },
  day2: {
    coreTerms: ["Variable", "String", "List", "Dictionary", "Function", "If/Else", "For Loop", "Debug"],
    sections: [
      {
        heading: "5. 看 Python 先看数据怎么流动",
        body: "读 Python 时不要逐字硬啃。先找输入从哪里来，再看它被保存到哪个变量，经过哪个函数处理，最后 print 出来、写入文件、发到 API，还是变成 JSON。"
      }
    ],
    exercises: [
      single("d2-e7", "Python 代码阅读：user = {'name': 'Ann', 'level': 1} 表示什么？", ["一个字典，保存带名字的资料", "一个网页按钮", "一个 HTTP 方法", "一个模型权重"], 0, "Python 字典用键值对保存资料。", { category: "代码读懂", knowledge: "Dictionary", mistakeHint: "不要把字典和列表混淆：字典看字段名，列表看顺序。", memory: "字典像资料卡。", review: "Day 2 数据结构的最小地图" }),
      single("d2-e8", "Python 代码阅读：for item in items: print(item) 表示什么？", ["逐个处理 items 里的项目并输出", "把按钮上传到服务器", "创建一个 AI 模型", "解析域名为 IP"], 0, "for 循环会按顺序处理列表里的每个项目。", { category: "代码读懂", knowledge: "For Loop", mistakeHint: "循环不是条件判断，它负责重复处理一组数据。", memory: "for 是逐个处理。", review: "Day 2 函数、条件和循环" })
    ]
  },
  day3: {
    coreTerms: ["IP", "URL", "DNS", "HTTP", "HTTPS", "GET", "POST", "API", "JSON", "REST", "CORS", "Status Code"],
    sections: [
      {
        heading: "5. API 的全称与边界",
        body: "API 是 Application Programming Interface，中文是应用程序编程接口。它不是某个具体网站，也不等于数据库，而是一套软件之间沟通的约定：你按什么地址、方法、格式提交请求，对方按什么格式返回结果。"
      },
      {
        heading: "6. 一次 API 请求到底经过什么",
        body: "用 Python 调 API 时，常见流程是：准备输入 → 用 requests 发送 HTTPS 请求 → 服务检查权限和参数 → 服务处理数据或调用模型 → 返回 JSON。你看到的结果只是最后一步。"
      }
    ],
    exercises: [
      single("d3-e7", "缩略词配对：API 的英文全称和中文意思是？", ["Application Programming Interface，应用程序编程接口", "Artificial Prompt Input，人工提示输入", "Automatic Page Index，自动页面索引", "Advanced Python Item，高级 Python 项"], 0, "API 是软件之间按约定沟通的接口。", { category: "缩略词配对", knowledge: "API", mistakeHint: "API 不是 AI 模型本身，而是你和某个服务沟通的门口。", memory: "API 是服务窗口，不是厨房。", review: "Day 3 API 的全称与边界" }),
      single("d3-e8", "概念辨析：API 和 SDK 的区别更准确的是？", ["API 是接口约定，SDK 是帮你更方便调用接口的工具包", "API 是数据库，SDK 是浏览器", "API 只能本地用，SDK 只能云端用", "它们完全没有区别"], 0, "SDK 常把复杂 API 调用封装成更好用的代码工具。", { category: "概念辨析", knowledge: "API vs SDK", mistakeHint: "不要把接口约定和工具包混为一谈。", memory: "API 是菜单，SDK 是带说明书和工具的做菜包。", review: "Day 3 网络与 API" }),
      single("d3-e9", "风险判断：把真实 AI 服务的 API Key 写进公开网页代码，最大问题是？", ["密钥会暴露，被别人滥用并产生费用", "网页颜色会变暗", "JSON 不能返回中文", "DNS 会停止工作"], 0, "公开网页代码对用户可见，真实密钥必须放后端。", { category: "风险判断", knowledge: "API Key", mistakeHint: "本地原型可以模拟，但真实服务不能把密钥放公开页面。", memory: "公开前端不放秘密。", review: "Day 3 JSON 与鉴权" })
    ]
  },
  day4: {
    coreTerms: ["AI", "ML", "LLM", "NLP", "Prompt", "Token", "Context Window"],
    sections: [
      {
        heading: "5. AI、ML、LLM、NLP 的层级关系",
        body: "AI 是人工智能的大范围概念；ML 是 Machine Learning，机器学习，是让系统从数据中学规律；NLP 是 Natural Language Processing，自然语言处理，关注语言理解和生成；LLM 是 Large Language Model，大语言模型，是现在常见聊天 AI 的核心类型。"
      },
      {
        heading: "6. 为什么模型会出错",
        body: "LLM 擅长根据上下文生成像样的文本，但它不天然知道你的事实是否最新、资料是否完整、业务规则是否隐藏。越是事实、法律、医学、财务和内部业务结论，越需要来源、验证和人工判断。"
      }
    ],
    exercises: [
      single("d4-e7", "缩略词配对：LLM 的英文全称和中文意思是？", ["Large Language Model，大语言模型", "Local Link Manager，本地链接管理器", "Linear Logic Machine，线性逻辑机器", "Language List Map，语言列表地图"], 0, "LLM 是处理和生成语言的大模型。", { category: "缩略词配对", knowledge: "LLM", mistakeHint: "LLM 不是全部 AI，它是 AI 里的一个重要类型。", memory: "AI 是大伞，LLM 是伞下的语言模型。", review: "Day 4 AI 模型工作逻辑" }),
      single("d4-e8", "概念辨析：上下文窗口 Context Window 指什么？", ["模型一次能看到和处理的信息范围", "浏览器窗口大小", "服务器机房窗户", "数据库表格宽度"], 0, "上下文窗口限制了模型能参考多少输入内容。", { category: "概念辨析", knowledge: "Context Window", mistakeHint: "资料发得多不等于模型都能稳定利用。", memory: "模型只能基于它看得到的上下文回答。", review: "Day 4 Token 与上下文窗口" }),
      single("d4-e9", "场景判断：AI 给出一个没有来源的市场规模数字，你应该？", ["要求来源并用可靠资料核对", "直接放进报告", "只改成更好听的语气", "把数字存进 CSS"], 0, "事实性数字要验证，不能只看表达是否流畅。", { category: "真实工作判断", knowledge: "幻觉验证", mistakeHint: "流畅不等于真实。", memory: "重要事实必须有来源。", review: "Day 4 幻觉与验证" })
    ]
  },
  day5: {
    coreTerms: ["Prompt", "Workflow", "Structured Output", "Debug", "JSON"],
    sections: [
      {
        heading: "5. 只用 Prompt、调用 API、做 RAG、做 Agent 的判断",
        body: "一次性写作、解释、改写，通常先用 Prompt。需要接入产品、反复自动调用，就需要 API。需要回答私有资料或长文档问题，考虑 RAG。需要多步骤计划、调用工具、观察结果再继续，才考虑 Agent。"
      }
    ],
    exercises: [
      single("d5-e7", "真实工作判断：你只想把一段邮件改得更礼貌，优先用什么？", ["Prompt", "RAG", "Agent", "向量数据库"], 0, "简单改写通常只需要清楚的 Prompt。", { category: "真实工作判断", knowledge: "Prompt 使用边界", mistakeHint: "不要把简单任务复杂化。", memory: "一次性语言任务，先用 Prompt。", review: "Day 5 AI 适合做什么" }),
      single("d5-e8", "真实工作判断：你想每天自动处理 200 条客户反馈并写入系统，更接近需要什么？", ["API 与工作流", "只靠手动聊天", "只改 CSS", "只背 Token 定义"], 0, "重复、自动、接系统的任务通常需要 API 和工作流设计。", { category: "真实工作判断", knowledge: "API 工作流", mistakeHint: "聊天窗口适合探索，稳定自动化要靠接口和流程。", memory: "要自动化，就要有接口。", review: "Day 5 工作流范式" })
    ]
  },
  day6: {
    coreTerms: ["Embedding", "RAG", "Vector Database", "Agent", "Tool Calling", "Workflow"],
    sections: [
      {
        heading: "5. RAG 的全称与核心思想",
        body: "RAG 是 Retrieval-Augmented Generation，中文常译为检索增强生成。Retrieval 是检索，Augmented 是增强，Generation 是生成。它的核心不是让模型“记住所有资料”，而是先把相关资料找出来，再让模型基于资料回答。"
      },
      {
        heading: "6. RAG、Embedding、向量数据库的关系",
        body: "Embedding 把文本变成数字向量；向量数据库保存并搜索这些向量；RAG 用搜索结果增强模型回答。三者关系是：Embedding 让资料可搜索，向量库负责找相关内容，RAG 把找到的内容交给模型。"
      },
      {
        heading: "7. Agent 不是更高级的聊天，而是多步骤执行",
        body: "Agent 的重点是目标、计划、工具、观察和迭代。它可以先查资料、再调用系统、再根据结果继续下一步。但它也更容易放大错误，所以必须有权限边界、日志和人工确认点。"
      }
    ],
    exercises: [
      single("d6-e7", "缩略词配对：RAG 的英文全称和中文意思是？", ["Retrieval-Augmented Generation，检索增强生成", "Random Answer Generator，随机答案生成器", "Remote API Gateway，远程接口网关", "Readable AI Grammar，可读 AI 语法"], 0, "RAG 是先检索资料，再增强生成。", { category: "缩略词配对", knowledge: "RAG", mistakeHint: "RAG 不是让模型凭空更聪明，而是给它可参考资料。", memory: "RAG = 先查资料，再回答。", review: "Day 6 RAG 的全称与核心思想" }),
      single("d6-e8", "概念辨析：RAG 和普通 Prompt 最大区别是？", ["RAG 会先检索外部资料并放入上下文", "RAG 只改变字体", "普通 Prompt 不能输入文字", "RAG 不需要模型"], 0, "RAG 的关键是检索资料增强上下文。", { category: "概念辨析", knowledge: "RAG vs Prompt", mistakeHint: "不要把“写得更详细的 Prompt”和“检索资料”混为一谈。", memory: "Prompt 是说明任务，RAG 是先找资料。", review: "Day 6 RAG、Embedding、向量数据库的关系" }),
      single("d6-e9", "概念辨析：Agent 和 Chatbot 的主要区别是？", ["Agent 更强调目标拆解、工具调用和多步执行", "Agent 不能聊天", "Chatbot 一定能操作数据库", "两者完全一样"], 0, "Agent 更像会执行流程的助理，但需要边界和监控。", { category: "概念辨析", knowledge: "Agent vs Chatbot", mistakeHint: "普通聊天主要回答，Agent 还可能行动。", memory: "Chatbot 回答，Agent 计划并调用工具。", review: "Day 6 Agent 与 Tool calling" })
    ]
  },
  day7: {
    coreTerms: ["API", "SDK", "RAG", "Agent", "API Key", "Workflow"],
    sections: [
      {
        heading: "5. 从模拟原型升级为真实 AI 产品的判断清单",
        body: "如果只是练习交互，用静态页面即可。如果要让多人使用，需要部署。如果要调用真实模型，需要后端。如果要查内部资料，需要 RAG。如果要自动做多步任务，需要工作流或 Agent。如果涉及客户、合同、财务、医疗、法律，必须有人审。"
      }
    ],
    exercises: [
      single("d7-e7", "综合判断：个人 AI 工作助手要查你自己的历史文档再回答，最可能需要？", ["RAG", "只用按钮颜色", "只写 README", "删除数据库"], 0, "涉及私有资料问答时，RAG 是常见方案。", { category: "综合判断", knowledge: "RAG 应用边界", mistakeHint: "只靠普通聊天很难稳定引用你的私有资料。", memory: "问自己的资料，先想到 RAG。", review: "Day 7 下一步路线" }),
      single("d7-e8", "综合判断：一个 AI 助手要自动查表、生成邮件草稿、等待你确认再发送，更接近？", ["带人工确认点的 Agent/Workflow", "纯静态网页", "只用 DNS", "只改 HTML 标题"], 0, "多步骤、调用工具、需要确认的任务适合工作流或 Agent。", { category: "综合判断", knowledge: "Agent 工作流", mistakeHint: "能行动的 AI 必须设置权限和确认点。", memory: "会动手的 AI，要有刹车。", review: "Day 7 风险清单" })
    ]
  }
};

Object.entries(courseDeepening).forEach(([dayId, extra]) => {
  const day = courseDays.find((item) => item.id === dayId);
  if (!day) return;
  day.coreTerms = extra.coreTerms || [];
  day.sections.push(...(extra.sections || []));
  day.exercises.push(...(extra.exercises || []));
});

const finalQuiz = [
  single("final-1", "最终测验：浏览器、前端、后端、模型之间最稳妥的数据流是？", ["浏览器直接暴露密钥调模型", "前端收集输入，后端保护密钥并调用模型", "CSS 调用模型", "DNS 生成答案"], 1, "真实密钥应由后端保护。"),
  single("final-2", "最终测验：看到 500 状态码，你优先判断？", ["服务器内部错误", "请求成功", "页面字体太大", "DNS 一定正确"], 0, "500 通常是服务端错误。"),
  fill("final-3", "最终测验：AI 先检索资料再回答，这种模式叫____。", ["RAG", "rag"], "RAG 是 retrieval augmented generation。"),
  multi("final-4", "最终测验：让 AI 帮你写代码时，应该？", ["要求解释", "本地运行", "看错误信息", "不验证直接上线"], [0, 1, 2], "AI 代码建议必须验证。"),
  single("final-5", "最终测验：JSON 的优势是？", ["结构清晰，方便程序读取", "让图片更清晰", "替代 HTTPS", "保证答案永远正确"], 0, "JSON 是结构化数据格式。"),
  single("final-6", "最终测验：Embedding 主要服务于？", ["语义相似检索", "按钮点击动画", "购买域名", "隐藏 Prompt"], 0, "Embedding 常用于检索。"),
  multi("final-7", "最终测验：高质量 Prompt 常包含？", ["角色", "目标", "输出格式", "评价标准"], [0, 1, 2, 3], "完整约束能提高质量。"),
  single("final-8", "最终测验：Agent 与普通问答的主要区别是？", ["更强调目标、步骤和工具调用", "只能回答天气", "不能使用上下文", "不需要模型"], 0, "Agent 更接近会拆步骤的执行者。"),
  fill("final-9", "最终测验：把真实 API Key 写进 index.html 最大风险是密钥____。", ["泄露", "暴露"], "前端文件公开可见。"),
  single("final-10", "最终测验：AI 输出重要事实时，你应该？", ["查来源并验证", "直接相信", "只看语气", "删除证据"], 0, "事实验证是工作流的一部分。")
];

function single(id, prompt, options, answer, explanation, meta = {}) {
  return { id, type: "single", prompt, options, answer, explanation, ...meta };
}
function multi(id, prompt, options, answer, explanation, meta = {}) {
  return { id, type: "multi", prompt, options, answer, explanation, ...meta };
}
function order(id, prompt, options, answer, explanation, meta = {}) {
  return { id, type: "order", prompt, options, answer, explanation, ...meta };
}
function fill(id, prompt, answer, explanation, meta = {}) {
  return { id, type: "fill", prompt, answer, explanation, ...meta };
}

function foundation(name, englishName, whatZh, whatEn, types, examples, aiUsageZh, aiUsageEn, mistakeZh, mistakeEn, selfCheckZh, selfCheckEn, code = "") {
  return {
    name,
    englishName,
    what: { zh: whatZh, en: whatEn },
    types: types.map(([zh, en]) => ({ zh, en })),
    examples: examples.map(([zh, en]) => ({ zh, en })),
    aiUsage: { zh: aiUsageZh, en: aiUsageEn },
    mistake: { zh: mistakeZh, en: mistakeEn },
    selfCheck: { zh: selfCheckZh, en: selfCheckEn },
    code
  };
}

finalQuiz.push(
  single("final-11", "最终测验：API 的英文全称是？", ["Application Programming Interface", "Artificial Prompt Intelligence", "Automatic Page Index", "Advanced Program Internet"], 0, "API = Application Programming Interface，中文是应用程序编程接口。", { category: "缩略词配对", knowledge: "API", mistakeHint: "你可能把 API 和 AI 模型混在一起了。API 是调用服务的接口约定。", memory: "API 是服务窗口。", review: "Day 3 API 的全称与边界" }),
  single("final-12", "最终测验：RAG 的英文全称是？", ["Retrieval-Augmented Generation", "Random Answer Generator", "Remote API Gateway", "Readable Agent Grammar"], 0, "RAG = Retrieval-Augmented Generation，中文是检索增强生成。", { category: "缩略词配对", knowledge: "RAG", mistakeHint: "RAG 不是随机生成答案，而是先检索资料再生成。", memory: "RAG = 先查资料，再回答。", review: "Day 6 RAG 的全称与核心思想" }),
  single("final-13", "最终测验：公司内部制度问答最可能优先考虑哪种方案？", ["RAG，因为要检索内部资料", "只用普通 Prompt，不需要资料", "只改页面颜色", "把 API Key 发给所有员工"], 0, "内部知识问答通常需要检索资料并引用来源。", { category: "场景判断", knowledge: "RAG 应用", mistakeHint: "如果答案依赖私有资料，就不能只靠模型记忆。", memory: "问资料，用检索。", review: "Day 6 AI 应用架构" }),
  single("final-14", "最终测验：让 AI 自动查系统、生成草稿、等你确认后提交，更接近什么？", ["Agent 或工作流", "单纯 CSS", "DNS 解析", "只读 HTML"], 0, "多步骤和工具调用任务更接近 Agent/Workflow，但要设置权限和确认点。", { category: "场景判断", knowledge: "Agent", mistakeHint: "会行动的 AI 不只是聊天机器人，还需要权限、日志和人工确认。", memory: "能行动，就要有边界。", review: "Day 7 风险清单" })
);

function term(term, fullName, translation, plainExplanation, aiUsage, commonMistake, aliases = [], deepDive = {}) {
  return { term, fullName, translation, plainExplanation, aiUsage, commonMistake, aliases, ...deepDive };
}

const glossaryGroups = [
  ["计算机基础", [
    term("程序", "Program", "程序", "让电脑按步骤做事的一套说明。", "AI 应用本身也是程序：接收输入、处理数据、调用模型、展示结果。", "不要把程序理解成只有复杂软件，网页里的脚本也是程序。"),
    term("文件", "File", "文件", "保存内容的容器，可以是网页、图片、代码或文档。", "网页项目通常由 HTML、CSS、JS 等文件组成。", "文件不等于程序，程序可能由很多文件组成。"),
    term("路径", "Path", "路径", "找到文件或资源的位置地址。", "部署网页、引用脚本、读取资料时都离不开路径。", "路径写错，程序可能不是坏了，只是找不到文件。"),
    term("命令行", "Command Line Interface", "命令行界面", "用文字命令操作电脑的窗口。", "以后安装工具、运行服务、查看日志常会用到。", "命令行不是黑客专用，只是另一种操作界面。"),
    term("数据库", "Database", "数据库", "长期保存和查询数据的系统。", "AI 工具可能用数据库保存用户、任务、资料和日志。", "数据库不是 AI 模型，模型生成内容，数据库保存数据。", ["DB", "Database"])
  ]],
  ["网络/API", [
    term("IP", "Internet Protocol Address", "互联网协议地址", "网络里定位设备或服务器的数字地址。", "浏览器最终要找到服务器 IP 才能通信。", "IP 不适合人记忆，所以才有域名。"),
    term("URL", "Uniform Resource Locator", "统一资源定位符", "网页或接口资源的完整地址。", "Python requests 调用 API 时需要请求 URL；网页前端调用后端也需要 URL。", "URL 不只是域名，还可能包含路径和参数。"),
    term("DNS", "Domain Name System", "域名系统", "把好记的域名翻译成 IP 的网络通讯录。", "访问 AI 产品网站前，浏览器通常先通过 DNS 找服务器。", "DNS 只负责找地址，不负责生成网页内容。"),
    term("HTTP", "HyperText Transfer Protocol", "超文本传输协议", "浏览器和服务器沟通的规则。", "前端调用后端 API 多数基于 HTTP。", "HTTP 本身不等于加密安全。"),
    term("HTTPS", "HyperText Transfer Protocol Secure", "安全超文本传输协议", "加密版 HTTP。", "登录、支付、AI 输入等敏感数据应使用 HTTPS。", "HTTPS 加密传输，但不能替代权限和数据治理。"),
    term("GET", "GET Method", "GET 请求方法", "通常用于获取数据。", "读取列表、查看状态、拉取公开内容常用 GET。", "GET 不适合提交大量敏感正文。"),
    term("POST", "POST Method", "POST 请求方法", "通常用于提交数据。", "把用户输入交给后端总结、分类、生成，常用 POST。", "POST 不是天然安全，仍需要 HTTPS 和鉴权。"),
    term("API", "Application Programming Interface", "应用程序编程接口", "软件之间按约定沟通的服务窗口。", "前端通过 API 请求后端，后端通过模型 API 调用 AI。", "API 不是 AI 模型，也不是数据库；它是沟通边界。"),
    term("JSON", "JavaScript Object Notation", "JavaScript 对象表示法", "一种轻量结构化数据格式。", "API 常用 JSON 传输入、输出、错误信息和模型结果。", "JSON 只是格式，不保证内容真实。"),
    term("REST", "Representational State Transfer", "表述性状态转移", "一种常见 API 设计风格。", "许多 Web API 会用 URL、GET、POST 等组织资源操作。", "REST 不是某个具体工具，而是一种设计约定。"),
    term("CORS", "Cross-Origin Resource Sharing", "跨源资源共享", "浏览器限制不同来源网页访问接口的一套机制。", "当前端和后端域名不同时，API 可能需要配置 CORS。", "CORS 报错不一定是网络坏了，常常是服务器没允许这个来源。"),
    term("Status Code", "HTTP Status Code", "HTTP 状态码", "服务器用数字说明请求结果。", "200 表示成功，404 表示没找到，500 表示服务端错误。", "状态码只能说明请求状态，不代表业务结论一定正确。", ["状态码"])
  ]],
  ["Python 编程基础", [
    term("Variable", "Variable", "变量", "给数据起名字，方便后面读取和使用。", "AI 工具会把用户输入、模型结果、分数等保存到变量里。", "变量名不是值本身，只是贴在值上的标签。", ["变量"]),
    term("String", "String", "字符串", "一段文字，在 Python 里常用引号包起来。", "用户输入、Prompt、模型回答通常都是字符串。", "字符串不是数字，不能直接当数值计算。", ["字符串"]),
    term("List", "List", "列表", "按顺序保存一组数据。", "题目列表、关键词列表、文档片段列表都适合用列表。", "列表强调顺序，字典强调字段名。", ["列表", "Array"]),
    term("Dictionary", "Dictionary", "字典", "用键值对组织资料。", "课程、题目、用户进度、API 返回结果都适合用字典理解。", "字典不靠位置读取，重点看字段名。", ["字典", "Dict", "Object"]),
    term("Function", "Function", "函数", "把一组步骤打包成可重复调用的工具。", "批改、统计字数、整理模型结果都可以写成函数。", "函数不是数据本身，而是处理数据的步骤。"),
    term("If/Else", "If / Else Condition", "条件判断", "根据真假条件选择走哪条路。", "AI 工具会判断输入是否为空、请求是否成功、结果是否需要复核。", "条件负责分支，不负责重复处理列表。", ["条件", "Condition"]),
    term("For Loop", "For Loop", "for 循环", "逐个处理一组数据。", "批量处理文档片段、题目、关键词时经常用循环。", "循环不是随机重复，要知道它正在遍历哪个列表。", ["循环", "Loop"]),
    term("Import", "Import", "导入", "把别人写好的工具包引入当前 Python 程序。", "调用 API 时可能导入 requests，处理 JSON 时可能导入 json。", "导入工具包不代表已经理解业务逻辑。"),
    term("Requests", "Requests Library", "requests 库", "Python 中常用来发送 HTTP 请求的工具库。", "调用后端 API 或模型 API 时，requests 能帮你发 GET/POST 请求。", "requests 只是发请求的工具，密钥安全和验证仍要靠设计。", ["requests"]),
    term("Debug", "Debugging", "调试", "找到问题、定位原因、验证修复的过程。", "AI 给 Python 建议后，仍要靠运行和调试确认。", "调试不是瞎改，而是用证据缩小范围。")
  ]],
  ["网页概念基础", [
    term("HTML", "HyperText Markup Language", "超文本标记语言", "描述网页结构的标记语言。", "输入框、按钮、章节标题都来自 HTML 结构。", "HTML 不是负责复杂逻辑的语言。"),
    term("CSS", "Cascading Style Sheets", "层叠样式表", "控制网页外观和布局。", "让训练营页面适配移动端、深色模式和卡片样式。", "CSS 负责样式，不负责调用模型。"),
    term("JavaScript", "JavaScript", "JavaScript 脚本语言", "让网页能响应点击、保存进度、批改题目。", "这个训练营网站本身用 JavaScript 做交互，但当前学习代码先统一用 Python。", "先不用把 JavaScript 当主学习语言；理解它负责网页交互即可。", ["JS"]),
    term("DOM", "Document Object Model", "文档对象模型", "浏览器把网页结构变成可操作的对象树。", "网页代码通过 DOM 找按钮、读输入、显示批改结果。", "当前阶段了解概念即可，不需要先写 DOM 代码。"),
    term("Event", "Event", "事件", "用户点击、输入、滚动等动作产生的信号。", "点击“提交批改”会触发网页里的事件处理。", "事件是网页交互概念，不是 Python 入门主线。")
  ]],
  ["AI 基础", [
    term("AI", "Artificial Intelligence", "人工智能", "让机器完成某些需要智能判断的任务。", "AI 应用可能做总结、分类、问答、生成、分析。", "AI 不是魔法，也不是永远正确。"),
    term("AI Model", "Artificial Intelligence Model", "人工智能模型", "把输入转成预测、分类或生成结果的核心能力。", "AI 应用通过模型 API 获取总结、问答、分类等结果。", "模型只是系统的一部分，不能替代权限、数据、验证和产品流程。", ["模型", "AI 模型"]),
    term("ML", "Machine Learning", "机器学习", "让系统从数据中学习规律的方法。", "很多 AI 能力来自机器学习模型。", "机器学习不等于手写所有规则。"),
    term("LLM", "Large Language Model", "大语言模型", "能处理和生成语言的大型模型。", "聊天、总结、写代码解释常依赖 LLM。", "LLM 是 AI 的一种，不是全部 AI。"),
    term("NLP", "Natural Language Processing", "自然语言处理", "让机器处理人类语言的技术方向。", "问答、翻译、摘要、情感分析都属于 NLP 场景。", "NLP 不只等于聊天机器人。"),
    term("Prompt", "Prompt", "提示词 / 任务说明", "你给 AI 的任务说明和上下文。", "决定模型要扮演什么角色、基于什么资料、输出什么格式。", "Prompt 写得好不能保证事实正确，仍要验证。"),
    term("Token", "Token", "文本单位 / 词元", "模型处理文本的小单位。", "模型收费、上下文长度、输入输出限制常按 Token 计算。", "Token 不一定等于一个汉字或一个英文单词。"),
    term("Context Window", "Context Window", "上下文窗口", "模型一次能看到的信息范围。", "资料过长时需要切分、摘要或 RAG。", "把资料全塞进去不代表模型会稳定使用每个细节。", ["上下文窗口"]),
    term("Structured Output", "Structured Output", "结构化输出", "让 AI 按 JSON、表格、清单等固定格式输出。", "方便程序继续读取，也方便人工检查遗漏。", "结构化输出更容易处理，但不代表内容一定正确。", ["结构化输出"]),
    term("Embedding", "Embedding", "嵌入 / 向量表示", "把文字变成便于比较的数字表示。", "用于语义检索，帮助系统找到和问题相近的资料。", "Embedding 不是答案，它是找资料的表示方式。")
  ]],
  ["AI 应用架构", [
    term("RAG", "Retrieval-Augmented Generation", "检索增强生成", "先检索资料，再让模型基于资料回答。", "适合知识库问答、长文档问答、内部资料助手。", "RAG 不是随机答案生成，也不能免除来源核查。"),
    term("Vector Database", "Vector Database", "向量数据库", "保存和搜索向量的数据库。", "配合 Embedding 找语义相似资料。", "向量数据库不是普通全文搜索的完全替代品。", ["向量数据库"]),
    term("Agent", "Agent", "智能体 / 代理", "围绕目标拆步骤、调用工具、观察结果并继续行动的 AI 系统。", "适合多步骤任务、自动化流程、工具协作。", "Agent 权限更大，错误也可能被放大，必须设边界。"),
    term("Tool Calling", "Tool Calling", "工具调用", "模型按结构化方式请求外部工具执行动作。", "让模型调用搜索、数据库、日历、邮件、计算器等工具。", "工具调用不等于随便让模型做任何事，需要权限和确认。"),
    term("Workflow", "Workflow", "工作流", "一组有顺序、有条件、有输出的任务步骤。", "AI 工作助手通常先做工作流，再逐步升级成 Agent。", "工作流不是越复杂越好，关键是可控和可检查。"),
    term("SDK", "Software Development Kit", "软件开发工具包", "帮开发者更方便接入某个服务的一组工具和示例。", "调用模型服务时，SDK 可以简化认证、请求和返回处理。", "SDK 不是 API 本身，它通常是 API 的封装工具。")
  ]],
  ["工程安全", [
    term("API Key", "Application Programming Interface Key", "接口密钥", "调用服务的门卡，用来证明你有权限。", "后端用 API Key 调用模型服务。", "不能写在公开前端、截图、公开仓库或聊天记录里。"),
    term("Environment Variable", "Environment Variable", "环境变量", "运行程序时读取的配置值。", "后端常用环境变量保存 API Key 和配置。", "环境变量不是万能保险，仍要控制权限和日志。", ["环境变量"]),
    term("Privacy", "Privacy", "隐私", "个人、客户、公司敏感信息的保护。", "AI 输入可能包含合同、简历、客户资料，必须最小化和脱敏。", "当前静态演示不联网，但真实 AI API 可能把输入发到服务端处理。", ["隐私"]),
    term("Validation", "Validation", "验证", "用运行、文档、来源和小实验确认结果。", "AI 输出代码、事实、建议后都需要验证。", "看起来专业不等于正确。", ["验证"])
  ]]
];

const termDeepDives = {
  程序: ["把想让电脑做的事写成明确步骤。比如“点击按钮后检查答案，再显示反馈”，这就是程序逻辑。", "像一张很严格的办事清单，每一步都要写清楚。", "如果答案正确，就显示绿色反馈；如果错误，就显示正确答案和解析。", "本网站的批改、进度统计、主题切换都由程序控制。", "程序是步骤；文件是保存步骤的容器；模型是可能被程序调用的一种能力。", "你能说出这个网站里哪一个动作是程序在控制的吗？"],
  文件: ["文件是电脑保存内容的基本单位。网页不是凭空出现的，而是浏览器读了 index.html、styles.css、script.js 这些文件。", "像不同文件夹里的纸张：有的写结构，有的写样式，有的写动作。", "index.html 放页面结构，styles.css 放颜色和布局，script.js 放交互逻辑。", "当前训练营就是由几个静态文件组合运行的网站。", "文件不是路径。文件是东西，路径是找到东西的地址。", "你能说出这个网站至少两个文件分别负责什么吗？"],
  路径: ["路径告诉电脑去哪里找一个文件或资源。路径写错时，页面可能不是坏了，只是找不到对应文件。", "像快递地址：地址错了，东西就送不到。", "`./index.html` 可以表示当前项目里的首页文件。", "浏览器通过路径找到首页、样式和脚本文件。", "路径不是文件内容，它只是位置。", "如果 CSS 没加载，你会先检查文件内容，还是先检查路径是否写对？"],
  命令行: ["命令行是用文字命令操作电脑的入口。以后运行 Python 脚本、查看错误、部署网站时经常会用到。", "像和电脑发短信：你输入一句命令，电脑按命令执行。", "`python word_count.py` 可以运行一个 Python 字数统计脚本。", "真实学习时，你会用命令行运行 Python、安装工具、查看报错。", "命令行不是黑客工具，而是一种更精确的操作方式。", "你能说出一个命令行适合做、鼠标操作不方便做的事情吗？"],
  数据库: ["数据库负责长期保存和查询数据。真实 AI 产品通常会把用户、资料、日志、任务记录放进数据库。", "像一个有索引的资料柜，不只是堆文件，而是能按条件查。", "一个学习平台可以用数据库保存每个用户的课程进度。", "当前网站只用 localStorage 保存在访问者自己的浏览器；公开版多用户同步通常需要数据库。", "数据库不是 AI 模型。数据库保存资料，模型生成或理解内容。", "如果要让不同电脑同步学习进度，本地存储够不够？"],
  IP: ["IP 是网络里的地址。服务器要被找到，最终都要落到某个网络地址上。", "像门牌号，机器之间靠它找到彼此。", "你输入域名后，网络会找到背后的 IP，再连接服务器。", "AI 产品的网站和 API 服务都运行在能被网络找到的地址上。", "IP 不适合人记，所以我们通常用域名。", "为什么你更愿意记 example.com，而不是一串数字地址？"],
  URL: ["URL 是一个资源的完整地址，可能包含协议、域名、路径和参数。", "像完整快递单：城市、街道、门牌、收件人都写清楚。", "`https://api.example.com/summarize` 可能就是一个总结接口的 URL。", "Python 用 requests 调 API、网页调用后端 API 时，都必须知道请求发到哪个 URL。", "URL 不等于域名，域名只是 URL 的一部分。", "你能从一个 URL 里找出域名和路径吗？"],
  DNS: ["DNS 把人能记住的域名翻译成机器能连接的 IP。", "像电话簿：你记名字，它帮你查号码。", "浏览器访问 `example.com` 前，通常先问 DNS：这个名字对应哪个 IP？", "AI 产品部署到公网后，用户通过域名访问，背后离不开 DNS。", "DNS 只负责找地址，不负责网页内容或 AI 回答。", "如果域名打不开，DNS 可能是哪一环？"],
  HTTP: ["HTTP 是浏览器和服务器传递请求、响应的规则。", "像双方约好的对话格式：你怎么问，对方怎么答。", "浏览器请求页面、前端请求 API，很多都基于 HTTP。", "前端通过 HTTP/HTTPS 把用户输入发给后端 API。", "HTTP 不是加密保证，敏感数据应使用 HTTPS。", "HTTP 解决的是沟通规则，还是模型生成能力？"],
  HTTPS: ["HTTPS 是加密版 HTTP，能保护传输过程不容易被偷看或篡改。", "像把普通明信片换成加密信封。", "登录、支付、提交 AI 输入时应该使用 HTTPS。", "真实 AI 工具处理用户文本和账号信息时，应通过 HTTPS 通信。", "HTTPS 保护传输，不代表后端一定安全。", "为什么有 HTTPS 仍然不能把 API Key 写在前端？"],
  GET: ["GET 通常用来获取数据，参数常放在 URL 里。", "像问服务员：菜单有哪些？", "打开文章列表、读取公开课程信息，常用 GET。", "AI 产品里 GET 可用于读取任务状态或历史记录。", "GET 不适合提交大量敏感正文。", "获取数据和提交长文本，哪个更适合 GET？"],
  POST: ["POST 通常用来提交数据，请求体里可以放更复杂内容。", "像把表格交给服务员，让后厨处理。", "把一段文章提交给后端做总结，通常用 POST。", "调用 AI 总结、分类、生成时，前端常 POST 到自己的后端。", "POST 不等于天然安全，仍需要 HTTPS、鉴权和后端保护。", "调用 AI 总结时，为什么通常不是 GET？"],
  API: ["API 是软件之间按约定沟通的接口。你不用知道服务内部怎么做，只要按约定发请求、收结果。", "像餐厅服务窗口：你点菜，不需要进厨房。", "Python 脚本可以把文本发给 `/api/summary`，服务返回 JSON 总结。", "真实 AI 产品通常是 Python 脚本或网页前端调用自己的后端 API，后端再调用模型 API。", "API 不是 AI 模型，也不是数据库；它是沟通边界。", "如果你要让一个工具连接模型，中间为什么最好有自己的后端 API？"],
  JSON: ["JSON 是一种结构化数据格式，适合软件之间传资料。", "像一张标签清楚的表单，每个字段都有名字。", "`{\"summary\":\"...\",\"keywords\":[\"AI\",\"API\"]}` 就是一段 JSON。", "模型结果、错题记录、用户进度都可以用 JSON 结构表达。", "JSON 只是格式，不保证内容真实。", "JSON 的优势是好看，还是方便程序读取？"],
  REST: ["REST 是一种常见 API 设计风格，用资源和 HTTP 方法组织接口。", "像把服务整理成一组清楚的窗口：查列表、建记录、改记录、删记录。", "`GET /lessons` 读课程，`POST /answers` 提交答案。", "以后做真实训练营后端时，可以用 REST 风格设计课程和答题接口。", "REST 不是某个软件，也不是所有 API 的唯一方式。", "REST 更像工具，还是接口设计习惯？"],
  CORS: ["CORS 是浏览器的跨来源访问规则。当前端和后端不在同一个来源时，服务器要明确允许。", "像门卫：不是这个小区来的访客，需要名单允许才能进。", "前端在 `site.com`，API 在 `api.site.com`，可能需要 CORS 配置。", "部署前后端分离 AI 应用时经常会遇到 CORS。", "CORS 报错不一定是 API 坏了，可能是服务器没允许这个来源。", "CORS 是浏览器限制，还是 AI 模型限制？"],
  "Status Code": ["状态码是服务器用数字告诉浏览器请求的大致结果。", "像快递状态：已送达、找不到地址、仓库出错。", "200 成功，404 找不到，500 服务器错误。", "AI API 调用失败时，状态码能帮你判断是请求问题、权限问题还是服务问题。", "状态码说明请求状态，不保证业务内容一定正确。", "看到 500，你会先检查前端样式，还是后端服务？"],
  HTML: ["HTML 描述网页有哪些结构：标题、段落、按钮、输入框、章节。", "像房子的骨架和房间布局。", "`<button>提交批改</button>` 表示页面上有一个按钮。", "训练营的导航、课程标题、题目卡片都来自 HTML 结构。", "HTML 管结构，不负责复杂交互和批改逻辑。", "如果页面少了一个按钮，你会先找 HTML 还是 CSS？"],
  CSS: ["CSS 控制页面长什么样：颜色、间距、布局、深色模式、移动端适配。", "像装修和排版，让同一个房子看起来舒服。", "`.button { background: green; }` 可以改变按钮颜色。", "训练营的卡片、圆角、响应式布局都由 CSS 控制。", "CSS 不负责保存进度或调用模型。", "按钮能点击是 CSS 的功劳，还是 JavaScript 的功劳？"],
  JavaScript: ["JavaScript 让网页有动作：点击、输入、批改、保存、搜索。", "像网页里的小管家，听到动作后执行步骤。", "点击“提交批改”后，网页脚本读取你的选择，判断对错，再更新页面。", "本训练营的答题、错题本、XP、主题切换都靠 JavaScript；你现阶段只要知道它负责网页交互。", "前端 JS 对用户可见，不能放真实 API Key。", "为什么这个静态网页不用后端服务器也能批改选择题？"],
  DOM: ["DOM 是浏览器读完 HTML 后生成的一棵可操作的页面结构树。网页脚本不是直接修改网页文件，而是先找到页面上的元素，再修改显示内容。", "像一棵树：页面是树，标题、按钮、输入框、结果区域都是树枝和叶子。", "比如点击批改按钮后，网页脚本会找到反馈区域，把“回答正确/错误”写进去。", "本训练营的题目卡、按钮、输入框、反馈框，都可以理解为 DOM 树上的节点。", "DOM 不是数据库、不是服务器、不是网页文件本身，而是浏览器读完 HTML 后生成的页面结构。", "你能指出这个页面上的一个 DOM 节点吗？比如按钮、输入框或题目卡。"],
  Event: ["事件是用户或浏览器发生的动作信号，比如点击、输入、滚动。", "像门铃：门铃响了，不等于事情完成，只是提醒系统该执行某个动作。", "比如你点击“提交批改”，这就是一个点击事件；网站随后执行批改流程。", "提交批改、复制 Prompt、切换深色模式都由事件触发。", "事件不是函数本身；事件发生后，处理步骤才被调用。", "点击按钮时，事件和处理步骤分别是什么角色？"],
  Variable: ["变量是给数据起名字，方便后面读取和使用。", "像给一个盒子贴标签：盒子里装文字、数字或真假值。", "`name = \"AI\"` 表示变量 name 里保存了文字 AI。", "AI 工具会把用户输入、模型回答、分数等先放进变量，再继续处理。", "变量名不是值本身，只是指向值的名字。", "看到 `score = 90`，变量名和值分别是什么？"],
  String: ["字符串是一段文字，在 Python 里常用引号包起来。", "像一张便签上的文字内容。", "`text = \"学习 API\"` 里，右边就是字符串。", "Prompt、用户输入、模型回答大多都是字符串。", "字符串和数字不同，`\"90\"` 是文字，`90` 才是数字。", "为什么 `\"2\" + \"3\"` 不等于数学里的 5？"],
  List: ["列表按顺序保存一组数据，适合多个项目。", "像排队：第一个、第二个、第三个都有顺序。", "`topics = [\"API\", \"RAG\", \"Prompt\"]` 是一个 Python 列表。", "题目选项、关键词、文档片段都适合用列表保存。", "列表强调顺序；字典强调字段名。", "为什么排序题的步骤适合用列表保存？"],
  Dictionary: ["字典用键值对保存一组相关资料，每个字段名对应一个值。", "像一张资料卡：姓名、等级、完成率都有标签。", "`user = {\"name\": \"Ann\", \"level\": \"beginner\"}` 是一个 Python 字典。", "API 返回结果、用户进度、课程资料都可以用字典理解。", "字典不靠第几个位置读取，重点看字段名。", "如果要保存一个用户的姓名和分数，为什么字典比列表更清楚？"],
  Function: ["函数把一组步骤打包，方便重复使用。", "像一台小机器：输入材料，按固定步骤处理，输出结果。", "`def count_words(text): return len(text.split())` 可以统计词数。", "批改、统计字数、整理模型结果都可以写成函数。", "函数是步骤，不是保存很多资料的仓库。", "如果一段逻辑要用很多次，为什么适合写成函数？"],
  "If/Else": ["if/else 是条件判断：条件成立走一条路，不成立走另一条路。", "像岔路口：满足条件就往左，不满足就往右。", "`if score >= 60: print(\"通过\") else: print(\"继续练习\")`。", "AI 工具会判断输入是否为空、请求是否成功、结果是否需要复核。", "条件负责分支，不负责重复处理一整组数据。", "判断“分数是否及格”适合用条件还是循环？"],
  "For Loop": ["for 循环会逐个处理一组数据。", "像逐张检查一叠卡片。", "`for topic in topics: print(topic)` 会逐个输出 topics 里的主题。", "批量处理文档片段、关键词、题目时经常用循环。", "循环不是随机重复，要知道它正在遍历哪个列表。", "如果要处理 10 个关键词，为什么循环比复制 10 行更好？"],
  Import: ["import 是把别人写好的工具包引入当前 Python 程序。", "像从工具箱里拿出一把工具。", "`import requests` 表示准备使用 requests 发送网络请求。", "调用 API 时可能导入 requests，处理 JSON 时可能导入 json。", "导入工具包不代表已经理解业务逻辑。", "为什么导入 requests 后，还要知道请求 URL 和参数？"],
  Requests: ["requests 是 Python 里常用的 HTTP 请求库。", "像帮你把信按 HTTP 规则寄出去的工具。", "`response = requests.post(url, json=data)` 会向 url 提交 JSON 数据。", "调用后端 API 或模型 API 时，requests 能帮你发 GET/POST 请求。", "requests 只是发请求的工具，密钥安全和验证仍要靠设计。", "requests 负责发请求，还是负责判断模型答案一定正确？"],
  Debug: ["调试是根据现象、错误信息和实验一步步定位问题。", "像修电灯：先看是不通电、灯泡坏了，还是开关坏了。", "Python 报错 `NameError` 时，常见原因是变量名写错或还没定义。", "你可以把错误信息、期望结果、实际结果交给 AI，让它帮你定位，但修完要自己运行验证。", "调试不是随机改代码，而是用证据缩小范围。", "遇到 bug 时，你能说出“期望结果”和“实际结果”吗？"],
  AI: ["AI 是让机器完成某些看起来需要智能的任务，比如理解文字、生成回答、识别图片。", "像一个能力集合，不是单一工具。", "总结文章、分类客户反馈、生成学习计划都属于 AI 应用场景。", "本训练营关注如何理解和使用 AI，而不是从零训练模型。", "AI 不等于永远正确，也不等于所有自动化。", "一个普通计算器算加法，算 AI 吗？为什么？"],
  "AI Model": ["AI 模型是把输入变成预测、分类或生成结果的核心能力。", "像一个训练过的判断器：你给输入，它给输出。", "你输入一段文章，模型可能输出摘要。", "真实总结工具里，后端会调用模型 API 获取结果。", "模型不是完整产品；产品还需要界面、数据、安全、评估。", "为什么“有模型”不等于“有一个好用的 AI 产品”？"],
  ML: ["机器学习让系统从数据中学习规律，而不是人工写死所有规则。", "像看很多例子后学会判断。", "垃圾邮件识别可以从大量邮件样本中学习规律。", "很多现代 AI 能力来自机器学习模型。", "机器学习不等于模型一定懂业务语境。", "机器学习和手写规则有什么不同？"],
  LLM: ["大语言模型专门擅长处理和生成语言。", "像一个读过大量文本、能续写和改写语言的系统。", "让 AI 解释代码、总结文章、生成 Prompt，常依赖 LLM。", "ChatGPT 这类对话能力背后通常是 LLM。", "LLM 是 AI 的一种，不是所有 AI。", "语音识别、图片分类、聊天写作都一定是 LLM 吗？"],
  NLP: ["自然语言处理关注机器如何理解、转换和生成人类语言。", "像让电脑学会处理人说的话和写的字。", "翻译、摘要、问答、情感分析都是 NLP 场景。", "很多 AI 办公工具的输入输出都是自然语言，所以离不开 NLP。", "NLP 不只等于聊天，也包括分类、抽取、检索。", "把一堆评论分成正面和负面，属于 NLP 吗？"],
  Prompt: ["Prompt 是你给 AI 的任务说明、背景资料和输出要求。", "像给助理的任务单：目标、资料、格式、限制越清楚，结果越可控。", "“基于以下资料，用三点总结，并标出不确定信息”就是比“总结一下”更好的 Prompt。", "工作中用 AI 写报告、解释代码、生成方案，都要设计 Prompt。", "Prompt 再好也不保证事实正确，重要内容仍要验证。", "你的 Prompt 里有没有目标、资料、格式和检查标准？"],
  Token: ["Token 是模型处理文本的小单位。模型不是直接按整篇文章理解，而是把文本切成小单位处理。", "像把长句拆成积木块。", "一句中文可能被切成多个 Token，英文单词也可能被拆开。", "上下文长度和费用常与 Token 数有关。", "Token 不等于一个字，也不等于一个单词。", "为什么很长的资料会受到上下文窗口限制？"],
  "Context Window": ["上下文窗口是模型一次能看到的信息范围。超过范围的内容，模型可能看不到或用不好。", "像考试时桌面能摊开的资料有限。", "如果把一本书全塞给模型，它可能无法稳定关注每一页细节。", "长文档问答常需要切分、检索和 RAG。", "上下文窗口大不等于答案一定准确。", "当资料太长时，你会直接全贴，还是先整理/检索？"],
  "Structured Output": ["结构化输出让 AI 按固定格式回答，例如 JSON、表格、清单。", "像让对方填表，而不是自由发挥写散文。", "要求输出 `{summary, keywords, risks}`，程序就更容易读取。", "AI 工具常用结构化输出把模型结果交给后续程序处理。", "格式正确不代表内容正确。", "为什么让 AI 输出表格会比一大段文字更容易检查？"],
  Embedding: ["Embedding 把文字变成数字向量，让电脑能比较语义相似度。", "像给每段文字一个“含义坐标”。意思接近的文本，坐标也更近。", "“请假制度”和“年假怎么申请”可能在向量空间里比较接近。", "RAG 会用 Embedding 找出和问题最相关的资料片段。", "Embedding 不是最终答案，它只是帮助检索。", "Embedding 在 RAG 里负责回答，还是负责找资料？"],
  RAG: ["RAG 是先检索资料，再让模型基于资料生成回答。它解决的是模型不知道私有资料或知识过期的问题。", "像开卷考试：先翻资料，再组织答案。", "问“公司报销规则是什么”，系统先找制度文档，再让模型总结。", "个人知识库、内部文档问答、长文档问答常用 RAG。", "RAG 不能免除验证；资料找错或资料本身过期，答案仍可能错。", "如果答案依赖你的私人资料，为什么普通聊天可能不够？"],
  "Vector Database": ["向量数据库保存 Embedding，并能快速找相似内容。", "像按意思而不是按字面排序的资料库。", "搜索“年假申请”，它可能找到“休假流程”相关片段。", "RAG 系统常用向量数据库检索相关资料。", "向量数据库不是模型，也不负责写最终答案。", "向量数据库在 RAG 里负责存和找，还是负责生成？"],
  Agent: ["Agent 是围绕目标分步骤做事、调用工具、观察结果并继续行动的 AI 系统。", "像一个会拆任务的助理，但必须有权限边界。", "它可以先查资料，再生成邮件草稿，再等你确认后发送。", "工作流自动化、复杂研究、跨工具任务会考虑 Agent。", "Agent 不是更厉害的普通聊天；它可能会行动，所以风险更高。", "一个能发邮件的 Agent 为什么必须有人类确认点？"],
  "Tool Calling": ["工具调用让模型用结构化方式请求外部工具，比如搜索、查数据库、算数、发邮件。", "像助理说：我需要用计算器/资料库/日历来完成这步。", "模型判断需要查资料，就请求调用 search 工具。", "Agent 和真实 AI 应用常用 Tool Calling 连接外部系统。", "工具调用不是让模型无限制操作，必须有权限控制。", "模型自己回答和调用工具后回答，区别在哪里？"],
  Workflow: ["工作流是一组可控步骤，规定先做什么、再做什么、失败怎么办。", "像做菜流程：备料、下锅、调味、出锅，每步都有顺序。", "客户反馈处理：收集 → 分类 → 总结 → 人工复核 → 写入系统。", "很多 AI 助手先做成工作流，比直接做 Agent 更稳。", "工作流不是越复杂越好，关键是可检查。", "你的工作任务能拆成哪 3 个固定步骤？"],
  SDK: ["SDK 是软件开发工具包，帮开发者更方便使用某个服务。", "像买家具附带工具和说明书，而不只是给你一堆零件。", "模型服务 SDK 可能帮你处理认证、请求格式和错误。", "真实 AI 应用可以用 SDK 更方便调用模型 API。", "SDK 是工具包，不是 API 本身。", "API 和 SDK，哪个是接口约定，哪个是工具包？"],
  "API Key": ["API Key 是调用服务的密钥，用来证明你有权限。", "像门禁卡，别人拿到也可能刷你的额度。", "后端用 API Key 调用模型服务，前端不应该公开它。", "真实 AI 工具必须把 API Key 放在后端环境变量里。", "API Key 不能写进 index.html、公开仓库或截图。", "为什么这个静态网站可以模拟 AI，但不能直接放真实密钥？"]
};

function applyTermDeepDives() {
  flatTerms().forEach((item) => {
    const keys = [item.term, item.fullName, ...(item.aliases || [])].map(normalize);
    const entry = Object.entries(termDeepDives).find(([key]) => keys.includes(normalize(key)));
    const values = entry?.[1] || [];
    item.deeperExplanation = values[0] || `${item.plainExplanation}${item.aiUsage}`;
    item.analogy = values[1] || "先把它当成系统中的一个角色：它负责一件具体事情，不负责所有事情。";
    item.concreteExample = values[2] || item.aiUsage;
    item.inThisSite = values[3] || "在这个训练营里，它会出现在课程讲解、题目批改或项目原型中。";
    item.distinction = values[4] || item.commonMistake;
    item.selfCheck = values[5] || `你能用一句话说明 ${item.term} 解决什么问题吗？`;
  });
}

applyTermDeepDives();

const conceptMaps = [
  {
    title: "API 请求链路",
    summary: "从按钮点击到后端返回 JSON，API 是前端和服务之间的约定边界。",
    steps: ["用户点击按钮", "Python 脚本或网页收集输入", "requests 或后端发起 HTTPS 请求", "后端 API 校验权限和参数", "服务处理或调用模型", "返回 JSON", "前端渲染结果"],
    checkpoint: "能说清 GET/POST、URL、JSON、状态码和 API Key 放在哪里。"
  },
  {
    title: "RAG 工作流",
    summary: "RAG 不是让模型凭空知道资料，而是先检索，再把资料放进上下文。",
    steps: ["用户提问", "问题转成 Embedding", "向量数据库检索相关片段", "片段进入上下文窗口", "LLM 基于资料生成", "显示来源并人工验证"],
    checkpoint: "能解释 Retrieval、Augmented、Generation 分别是什么意思。"
  },
  {
    title: "AI 应用架构",
    summary: "真实 AI 产品通常是前端、后端、数据、模型、安全和评估的组合。",
    steps: ["前端界面", "后端接口", "权限和 API Key", "资料库/数据库", "模型 API", "日志与质量评估", "错误兜底"],
    checkpoint: "能判断一个需求只要 Prompt、需要 API、需要 RAG，还是需要 Agent。"
  },
  {
    title: "从静态网页到真实 AI 产品",
    summary: "先用模拟原型验证流程，再逐步接入后端和真实模型。",
    steps: ["本地静态原型", "设计输入输出", "增加后端接口", "密钥放环境变量", "调用模型 API", "处理加载/错误/费用", "部署与监控"],
    checkpoint: "能说清为什么不能把真实 API Key 放在 index.html。"
  }
];

const lessonFoundations = {
  day1: [
    foundation("文件", "File", "文件是电脑保存内容的容器，网页、样式、脚本、图片、文档都可以是文件。", "A file is a container for saved content, such as a web page, style sheet, script, image, or document.", [["网页文件：HTML、CSS、JavaScript。", "Web files: HTML, CSS, and JavaScript."], ["资料文件：PDF、图片、表格、笔记。", "Content files: PDFs, images, spreadsheets, and notes."]], [["当前网站由 index.html、styles.css、script.js 组成。", "This site is made from index.html, styles.css, and script.js."]], "AI 工具的界面、提示词模板、资料库文档，最终都会落到某些文件或数据记录里。", "An AI tool's interface, prompt templates, and knowledge documents eventually live in files or data records.", "文件不是程序本身。程序可能由很多文件组合起来。", "A file is not necessarily a whole program. A program can be built from many files.", "你能说出这 3 个文件分别负责结构、样式还是交互吗？", "Can you tell which of the three files controls structure, style, and interaction?"),
    foundation("路径", "Path", "路径是找到文件或资源的位置地址。路径写错时，浏览器就找不到对应文件。", "A path is the location used to find a file or resource. If the path is wrong, the browser cannot find it.", [["绝对路径：从根目录开始的完整地址。", "Absolute path: a full address from the root."], ["相对路径：相对于当前文件的位置。", "Relative path: a location relative to the current file."]], [["./index.html 是当前项目首页的相对路径。", "./index.html is a relative path for this project's homepage."]], "真实 AI 产品会用路径引用脚本、样式、图片、API 地址和资料文件。", "Real AI products use paths for scripts, styles, images, API URLs, and knowledge files.", "页面打不开不一定是代码错，也可能只是路径错。", "A page failing to load is not always a code problem; the path may be wrong.", "如果 CSS 没生效，你会先检查样式内容，还是先检查路径是否连上？", "If CSS is not applied, would you first check the styles or whether the path is connected?"),
    foundation("浏览器", "Browser", "浏览器负责读取网页文件、显示页面、执行 JavaScript，并替用户向服务器发请求。", "A browser reads web files, displays pages, runs JavaScript, and sends requests to servers for the user.", [["读取 HTML 结构。", "Read HTML structure."], ["应用 CSS 样式。", "Apply CSS styles."], ["执行 JavaScript 交互。", "Run JavaScript interactions."]], [["你点“提交批改”时，浏览器里的 JavaScript 会读取选择并更新反馈。", "When you click grade, JavaScript in the browser reads your choice and updates feedback."]], "AI 网页工具的第一站通常是浏览器：用户输入、点击按钮、看到模型结果都发生在这里。", "The browser is usually the first stop in an AI web tool: users type input, click buttons, and see model results there.", "浏览器不是服务器。它可以运行前端代码，但不能安全保存真实 API Key。", "A browser is not a server. It can run frontend code, but it cannot safely store a real API key.", "你能分清“浏览器本地运行”和“服务器远程处理”的区别吗？", "Can you distinguish local browser execution from remote server processing?"),
    foundation("前端", "Frontend", "前端是用户看得见、点得到的部分，包括页面结构、样式和交互。", "The frontend is what the user sees and clicks: page structure, styling, and interaction.", [["HTML 负责结构。", "HTML handles structure."], ["CSS 负责外观。", "CSS handles appearance."], ["JavaScript 负责交互。", "JavaScript handles interaction."]], [["输入框、按钮、反馈卡片、进度条都属于前端。", "Inputs, buttons, feedback cards, and progress bars are frontend pieces."]], "AI 工具前端负责收集问题、展示回答、显示加载和错误状态。", "An AI tool frontend collects questions, displays answers, and shows loading and error states.", "前端代码对用户可见，不适合放密钥或敏感业务逻辑。", "Frontend code is visible to users, so it should not contain secrets or sensitive business logic.", "如果一个功能只是改变页面颜色，它更可能属于前端还是后端？", "If a feature only changes page color, is it more likely frontend or backend?"),
    foundation("后端 / 服务器", "Backend / Server", "后端是在服务器上运行的程序，负责更安全、更复杂的处理。服务器是运行这些程序的电脑或云环境。", "The backend is code running on a server for safer and more complex processing. A server is the machine or cloud environment running it.", [["后端 API：接收前端请求。", "Backend API: receives frontend requests."], ["业务逻辑：检查权限、处理参数。", "Business logic: checks permissions and parameters."], ["模型调用：安全调用 AI 服务。", "Model call: safely calls AI services."]], [["真实总结工具里，前端提交文章，后端再调用模型 API。", "In a real summarizer, the frontend submits text, then the backend calls the model API."]], "后端保护 API Key、检查输入、调用模型、记录日志，是 AI 应用的安全边界。", "The backend protects API keys, validates input, calls models, and records logs. It is a security boundary for AI apps.", "服务器不是数据库，也不是模型；它负责运行服务和协调流程。", "A server is not a database or a model; it runs services and coordinates the flow.", "为什么真实 API Key 不应该放在浏览器前端？", "Why should a real API key not live in the browser frontend?"),
    foundation("数据库", "Database", "数据库是长期保存和查询数据的系统。它适合保存用户、记录、资料和日志。", "A database stores and queries data over time. It is good for users, records, documents, and logs.", [["关系型数据库：像多张表。", "Relational database: like multiple tables."], ["文档数据库：像一批 JSON 文档。", "Document database: like many JSON documents."], ["向量数据库：按语义相似度搜索。", "Vector database: searches by semantic similarity."]], [["学习平台可以保存用户完成了哪一天、答错了哪些题。", "A learning platform can store which day a user completed and which questions were wrong."]], "AI 产品常用数据库保存资料库、对话历史、用户权限和质量评估数据。", "AI products often use databases for knowledge bases, chat history, permissions, and evaluation data.", "数据库负责保存和查询，不负责像大模型那样生成答案。", "A database stores and queries; it does not generate answers like a large model.", "如果要跨设备同步进度，只靠 localStorage 够不够？", "Is localStorage enough if progress must sync across devices?"),
    foundation("API", "Application Programming Interface", "API 是软件之间沟通的约定：按什么地址、方法、格式请求，对方按什么格式返回。", "An API is a contract for software communication: what address, method, and format to request, and what format to return.", [["浏览器调用后端 API。", "The browser calls a backend API."], ["后端调用模型 API。", "The backend calls a model API."], ["API 返回 JSON 或错误状态。", "An API returns JSON or an error status."]], [["点击按钮后，前端可以把输入 POST 给 /api/summarize。", "After a button click, the frontend can POST the input to /api/summarize."]], "API 把页面、后端、数据库和 AI 模型连接成一个产品。", "APIs connect pages, backends, databases, and AI models into a product.", "API 不是模型，也不是数据库；它是连接它们的沟通窗口。", "An API is not a model or database; it is the communication window connecting them.", "你能说清“谁调用谁的 API”吗？", "Can you explain who calls whose API?"),
    foundation("AI 模型", "AI Model", "AI 模型接收输入并生成、分类、预测或提取结果。它是能力核心，但不是完整产品。", "An AI model receives input and generates, classifies, predicts, or extracts output. It is the core capability, not the whole product.", [["语言模型：处理文字。", "Language model: handles text."], ["图像模型：处理图片。", "Image model: handles images."], ["Embedding 模型：把文本变成向量。", "Embedding model: turns text into vectors."]], [["文章总结工具会把文章发给语言模型，拿回摘要。", "A summarizer sends an article to a language model and receives a summary."]], "AI 应用通过后端调用模型，模型负责生成内容，应用负责权限、流程、展示和验证。", "An AI app calls a model through the backend. The model generates content; the app handles permissions, flow, display, and verification.", "有模型不等于有产品；产品还要有界面、安全、数据和错误处理。", "Having a model is not having a product; a product also needs UI, security, data, and error handling.", "一个 AI 产品除了模型，还至少需要哪三个部分？", "Besides a model, what three parts does an AI product need?")
  ],
  day2: [
    foundation("变量", "Variable", "变量是给数据起名字，方便后面读取和修改。读 Python 时先问：这个名字里装的是什么？", "A variable gives data a name so it can be read or changed later. When reading Python, ask: what is stored in this name?", [["字符串：一段文字。", "String: a piece of text."], ["数字：用于计算。", "Number: used for calculation."], ["布尔值：True 或 False。", "Boolean: True or False."]], [["name = \"AI\" 表示 name 里保存了文字 AI。", "name = \"AI\" means name stores the text AI."]], "AI 工具会把用户输入、模型结果、正确率等临时存在变量里，再显示或提交。", "AI tools store user input, model output, and scores in variables before displaying or submitting them.", "变量名不是值本身；它只是贴在值上的标签。", "A variable name is not the value itself; it is a label attached to the value.", "看到 summary = text[:80]，你能说出变量名、来源和值的大概形态吗？", "When you see summary = text[:80], can you identify the variable name, source, and rough value shape?", "name = \"AI\"\nscore = 0\nscore = score + 10\nprint(score)"),
    foundation("列表", "List", "列表按顺序保存一组数据，适合保存多个关键词、多个题目或多个文档片段。", "A list stores multiple items in order. It is good for keywords, questions, or document chunks.", [["空列表：items = []。", "Empty list: items = []."], ["读取第一个：items[0]。", "Read the first item: items[0]."], ["追加项目：items.append(\"API\")。", "Append an item: items.append(\"API\")."]], [["topics = [\"API\", \"RAG\", \"Prompt\"] 是一个主题列表。", "topics = [\"API\", \"RAG\", \"Prompt\"] is a topic list."]], "AI 工具会用列表保存检索到的资料片段、关键词、步骤和候选答案。", "AI tools use lists for retrieved chunks, keywords, steps, and candidate answers.", "列表强调顺序；如果每项都有名字和含义，可能更适合用字典。", "Lists emphasize order; if each value has a named meaning, a dictionary may fit better.", "看到 items[0] 时，你知道它在取第几个项目吗？", "When you see items[0], do you know which item it reads?", "items = [\"API\", \"RAG\"]\nprint(len(items))"),
    foundation("字典", "Dictionary", "字典用键值对保存一组相关信息，适合表示一个题目、一个用户、一个课程日。", "A dictionary stores related information as key-value pairs. It is good for one question, one user, or one lesson day.", [["空字典：user = {}。", "Empty dictionary: user = {}."], ["键：字段名，例如 name。", "Key: a field name, such as name."], ["值：字段对应的数据。", "Value: the data for that key."], ["嵌套：字典里还可以放列表或字典。", "Nesting: dictionaries can contain lists or dictionaries."]], [["user = {\"name\": \"Ann\", \"level\": 1} 表示一个用户资料。", "user = {\"name\": \"Ann\", \"level\": 1} represents user data."]], "API 返回的 JSON 可以先理解成“长得很像 Python 字典和列表的数据”。", "JSON returned by APIs can be understood as data shaped like Python dictionaries and lists.", "字典强调字段名；列表强调顺序。不要把二者混成一类。", "Dictionaries emphasize field names; lists emphasize order. Do not mix them up.", "你能从字典里找出哪个字段是题干、哪个字段是正确答案吗？", "Can you find which dictionary key is the prompt and which is the answer?", "question = {\n  \"prompt\": \"API 是什么？\",\n  \"answer\": \"应用程序编程接口\"\n}\nprint(question[\"prompt\"])"),
    foundation("函数", "Function", "函数把一组步骤打包，给它输入，它处理后可以返回结果。", "A function packages steps. You give it input, it processes, and it may return output.", [["def：定义函数。", "def: defines a function."], ["参数：函数接收的输入。", "Parameter: input received by a function."], ["return：函数返回的结果。", "return: the result returned by a function."]], [["count_words(text) 可以专门统计文字数量。", "count_words(text) can count words in text."]], "AI 工具会用函数处理输入、调用 API、格式化输出、保存进度。", "AI tools use functions to process input, call APIs, format output, and save progress.", "函数不是数据仓库；它更像处理数据的小机器。", "A function is not a data store; it is more like a small machine that processes data.", "你能说出一个函数的输入、处理和输出吗？", "Can you name a function's input, processing step, and output?", "def make_summary(text):\n    return text[:40]"),
    foundation("条件", "If / Else", "条件让代码根据不同情况走不同分支，常见写法是 if / else。", "A condition lets code choose different branches based on different situations, often with if / else.", [["比较：==、!=、>、<。", "Comparison: ==, !=, >, <."], ["真假：True / False。", "Boolean truth: True / False."], ["组合：and 表示并且，or 表示或者。", "Combination: and means AND, or means OR."]], [["如果分数 >= 80，就显示通过；否则显示继续练习。", "If score >= 80, show passed; otherwise show keep practicing."]], "AI 工具需要判断输入是否为空、API 是否成功、结果是否需要人工确认。", "AI tools need conditions to check empty input, API success, and whether a result needs human confirmation.", "条件不是循环。条件决定走哪条路，循环决定重复做多少次。", "A condition is not a loop. A condition chooses a path; a loop repeats steps.", "看到 if not text: 你能解释为什么空输入会被拦住吗？", "When you see if not text:, can you explain why empty input is blocked?", "if score >= 80:\n    result = \"通过\"\nelse:\n    result = \"继续练习\""),
    foundation("循环", "For Loop", "循环让代码对一组数据逐个做同一件事，比如检查每个关键词或处理每个文档片段。", "A loop lets code do the same thing to each item in a group, such as checking keywords or processing document chunks.", [["for item in items：逐项处理。", "for item in items: handles items one by one."], ["range(3)：重复固定次数。", "range(3): repeats a fixed number of times."], ["循环体：缩进的重复步骤。", "Loop body: indented repeated steps."]], [["for topic in topics: print(topic) 会逐个输出主题。", "for topic in topics: print(topic) prints each topic."]], "AI 应用会循环处理文档片段、题目列表、检索结果和输出项。", "AI apps loop through document chunks, question lists, retrieval results, and output items.", "循环不是越多越好；要知道它在遍历哪一组数据。", "More loops are not automatically better; know which group is being traversed.", "看到 for item in items 时，你能说出 items 是什么、item 是什么吗？", "When you see for item in items, can you explain what items and item are?", "topics = [\"API\", \"RAG\", \"Prompt\"]\nfor topic in topics:\n    print(topic)"),
    foundation("调试", "Debugging", "调试是用证据找到问题、定位原因、验证修复，不是随机改代码。", "Debugging means using evidence to find a problem, locate the cause, and verify the fix. It is not random editing.", [["期望结果：你以为应该发生什么。", "Expected result: what you thought should happen."], ["实际结果：程序真实输出什么。", "Actual result: what the program actually outputs."], ["最小复现：用最小 Python 例子重现问题。", "Minimal reproduction: reproduce the issue with the smallest Python example."]], [["字数统计不对时，要检查输入文本、切分方式、输出结果是否一致。", "If a word count is wrong, check input text, splitting method, and output."]], "AI 可以帮你解释错误信息，但最终仍要运行、观察、验证。", "AI can help explain error messages, but you still need to run, observe, and verify.", "不要只说“代码坏了”；要说期望、实际、报错和相关代码。", "Do not only say 'the code is broken'; state expected, actual, error, and relevant code.", "遇到 bug 时，你能写出一行期望结果和一行实际结果吗？", "When facing a bug, can you write one line for expected result and one for actual result?")
  ],
  day3: [
    foundation("URL", "Uniform Resource Locator", "URL 是资源的完整地址，通常包含协议、域名、路径和参数。", "A URL is the full address of a resource, usually including protocol, domain, path, and parameters.", [["协议：https://", "Protocol: https://"], ["域名：example.com", "Domain: example.com"], ["路径：/api/summary", "Path: /api/summary"]], [["https://api.example.com/v1/chat 是一个接口地址。", "https://api.example.com/v1/chat is an API address."]], "Python 用 requests 调 API 时，必须知道请求发往哪个 URL。", "When Python calls an API with requests, it must know which URL to request.", "URL 不等于 API；URL 是地址，API 是沟通约定。", "A URL is not an API. URL is an address; API is the communication contract.", "你能从一个 URL 里拆出协议、域名和路径吗？", "Can you split a URL into protocol, domain, and path?"),
    foundation("DNS", "Domain Name System", "DNS 把域名翻译成 IP 地址，让浏览器找到服务器。", "DNS translates a domain name into an IP address so the browser can find the server.", [["本地缓存：浏览器或系统可能记住结果。", "Local cache: the browser or system may remember results."], ["递归查询：DNS 服务层层查找。", "Recursive lookup: DNS services ask step by step."]], [["输入 example.com 后，DNS 帮浏览器找到背后的服务器地址。", "After you enter example.com, DNS helps the browser find the server address."]], "AI 产品上线后，用户通常通过域名访问前端或 API 服务。", "After an AI product is deployed, users usually access frontend or API services through domains.", "DNS 只负责找地址，不负责请求内容、权限或模型回答。", "DNS only finds addresses; it does not handle content, permissions, or model answers.", "如果域名无法解析，问题更可能在 DNS 还是 JavaScript 函数？", "If a domain cannot resolve, is the issue more likely DNS or a JavaScript function?"),
    foundation("HTTP / HTTPS", "HyperText Transfer Protocol / Secure", "HTTP 是客户端和服务器沟通的规则，HTTPS 是带加密的安全版本。", "HTTP is the rule for client-server communication. HTTPS is the encrypted secure version.", [["请求：客户端发出的信息。", "Request: information sent by the client."], ["响应：服务器返回的信息。", "Response: information returned by the server."], ["加密：HTTPS 保护传输过程。", "Encryption: HTTPS protects transmission."]], [["Python requests 可以通过 HTTPS 向后端提交文本。", "Python requests can submit text to the backend over HTTPS."]], "AI 应用会通过 HTTPS 传输用户输入和模型输出，减少传输中泄露风险。", "AI apps transmit user input and model output through HTTPS to reduce leakage during transmission.", "HTTPS 不是万能安全。密钥、权限、日志仍要单独设计。", "HTTPS is not complete security. Keys, permissions, and logs still need design.", "为什么用了 HTTPS，仍然不能公开 API Key？", "Why can an API key still not be public even with HTTPS?"),
    foundation("请求 / 响应", "Request / Response", "请求是客户端提出的问题或提交的数据，响应是服务器返回的结果。", "A request is the client's question or submitted data. A response is the server's result.", [["请求头：说明格式、权限等。", "Headers: describe format, permission, and metadata."], ["请求体：POST 时常放正文数据。", "Body: often contains submitted data in POST."], ["响应体：返回 JSON、HTML 或错误信息。", "Response body: returns JSON, HTML, or error data."]], [["提交文章总结：请求里有文章，响应里有摘要。", "Submitting a summarization request: the request contains the article; the response contains the summary."]], "调用 AI API 时，用户输入在请求里，模型结果在响应里。", "When calling an AI API, user input is in the request and model output is in the response.", "请求成功不代表业务正确；还要检查响应内容和状态码。", "A successful request does not guarantee business correctness; check response body and status code.", "你能指出一次 API 调用里，输入和输出分别在哪里吗？", "Can you point out where input and output live in one API call?"),
    foundation("GET / POST", "GET / POST", "GET 常用于获取数据，POST 常用于提交数据。它们是 HTTP 方法。", "GET is often for fetching data, POST for submitting data. They are HTTP methods.", [["GET：读列表、读状态、读公开资料。", "GET: read lists, status, public data."], ["POST：提交表单、发送文本、创建任务。", "POST: submit forms, send text, create tasks."]], [["AI 总结通常用 POST，因为要把长文本提交给后端。", "AI summarization usually uses POST because long text is submitted to the backend."]], "真实 AI 工具里，生成、总结、分类一般通过 POST 提交输入。", "In real AI tools, generation, summarization, and classification usually submit input with POST.", "POST 不等于安全；安全还需要 HTTPS、鉴权、后端保护。", "POST does not mean secure; security also needs HTTPS, authentication, and backend protection.", "读取公开课程和提交一篇文章，分别更适合 GET 还是 POST？", "Reading public lessons and submitting an article: which is GET and which is POST?"),
    foundation("JSON", "JavaScript Object Notation", "JSON 是软件之间传递结构化数据的常见格式，字段和值清楚对应。", "JSON is a common format for structured data exchange between software systems, with clear fields and values.", [["字符串用双引号。", "Strings use double quotes."], ["对象用大括号。", "Objects use curly braces."], ["数组用中括号。", "Arrays use square brackets."]], [["{\"summary\":\"重点\",\"score\":90} 是一段 JSON。", "{\"summary\":\"key point\",\"score\":90} is JSON."]], "AI API 常把请求参数和返回结果组织成 JSON，方便程序继续处理。", "AI APIs often organize request parameters and responses as JSON so programs can process them.", "JSON 格式正确不代表内容真实。模型可能返回结构化但错误的内容。", "Correct JSON format does not mean truthful content. A model may return structured but wrong content.", "你能说出 JSON 里的字段名和值吗？", "Can you identify field names and values in JSON?", "{\n  \"topic\": \"RAG\",\n  \"level\": \"beginner\",\n  \"steps\": [\"retrieve\", \"generate\"]\n}"),
    foundation("状态码", "HTTP Status Code", "状态码是服务器用数字告诉浏览器请求的大致结果。", "A status code is a number the server uses to tell the browser the rough result of a request.", [["200：成功。", "200: success."], ["400/401：请求或权限问题。", "400/401: request or permission issue."], ["404/500：找不到或服务器错误。", "404/500: not found or server error."]], [["AI API 返回 401 时，常见原因是鉴权失败或 Key 有问题。", "If an AI API returns 401, authentication or key problems are common causes."]], "状态码帮助你判断 AI 请求失败时该查 URL、权限、参数还是后端。", "Status codes help decide whether to check URL, permission, parameters, or backend when an AI request fails.", "状态码只说明请求层状态，不说明模型回答一定正确。", "A status code only describes request status, not whether the model answer is correct.", "看到 500，你会优先检查服务器还是页面颜色？", "When seeing 500, would you first check the server or page color?"),
    foundation("API Key", "Application Programming Interface Key", "API Key 是调用服务的门卡，用来证明你有权限和额度。", "An API key is an access card for calling a service, proving permission and quota.", [["项目 Key：给一个项目使用。", "Project key: used by one project."], ["环境变量：后端读取密钥的常见方式。", "Environment variable: common way for backend code to read secrets."], ["权限限制：限制可用范围和额度。", "Permission limits: restrict scope and quota."]], [["真实模型调用需要 Key，但这个公开静态训练营只做模拟，不放密钥。", "Real model calls need a key, but this public static bootcamp only simulates and stores no key."]], "后端用 API Key 调用模型服务，前端只调用自己的后端。", "The backend uses the API key to call the model service; the frontend only calls your backend.", "API Key 不能写进 index.html、script.js、公开仓库或截图。", "An API key must not be written into index.html, script.js, public repos, or screenshots.", "如果别人拿到你的 Key，可能产生哪些费用或数据风险？", "If someone gets your key, what cost or data risks may appear?")
  ],
  day4: [
    foundation("AI / ML / LLM", "Artificial Intelligence / Machine Learning / Large Language Model", "AI 是大概念，ML 是从数据学习的方法，LLM 是擅长语言的大模型。", "AI is the broad idea, ML learns from data, and an LLM is a large model specialized in language.", [["AI：智能任务的总称。", "AI: broad category of intelligent tasks."], ["ML：从数据中学习规律。", "ML: learns patterns from data."], ["LLM：处理和生成语言。", "LLM: handles and generates language."]], [["ChatGPT 这类聊天写作能力通常来自 LLM。", "ChatGPT-style chat and writing ability usually comes from an LLM."]], "工作中常用的总结、改写、解释代码，大多依赖 LLM 能力。", "Work tasks like summarizing, rewriting, and explaining code often rely on LLM capability.", "LLM 是 AI 的一种，不是所有 AI；AI 也不等于永远正确。", "LLM is one type of AI, not all AI; AI also does not mean always correct.", "你能用一句话区分 AI、ML、LLM 吗？", "Can you distinguish AI, ML, and LLM in one sentence?"),
    foundation("Prompt", "Prompt", "Prompt 是给 AI 的任务说明，包括目标、背景、输入、格式、限制和评价标准。", "A prompt is the task instruction for AI, including goal, context, input, format, constraints, and evaluation criteria.", [["角色：让 AI 以什么身份工作。", "Role: who the AI should act as."], ["任务：要完成什么。", "Task: what to accomplish."], ["格式：输出表格、JSON、清单等。", "Format: table, JSON, checklist, etc."]], [["“请基于以下资料，用三点总结，并标出不确定信息。”", "\"Based on the following material, summarize in three points and mark uncertainties.\""]], "Prompt 是你把工作交给 AI 的主要入口，决定输出是否可读、可检查、可继续处理。", "Prompt is the main entry for handing work to AI; it affects whether output is readable, checkable, and processable.", "Prompt 好不等于答案一定真。事实、代码、数据仍要验证。", "A good prompt does not guarantee truth. Facts, code, and data still need verification.", "你的 Prompt 是否写清楚了目标、输入和输出格式？", "Does your prompt clearly state goal, input, and output format?"),
    foundation("Token", "Token", "Token 是模型处理文本的小单位，费用、长度限制和上下文窗口都常与它有关。", "A token is a small text unit processed by the model. Cost, length limits, and context windows often depend on it.", [["中文可能一个字或词被拆成多个 Token。", "Chinese characters or words may become multiple tokens."], ["英文单词也可能被拆开。", "English words can also be split."], ["输入和输出都会消耗 Token。", "Both input and output consume tokens."]], [["很长的合同会占用大量 Token，模型可能看不完或成本变高。", "A long contract consumes many tokens, may exceed context, or increase cost."]], "设计 AI 工具时要控制输入长度、摘要策略和输出格式，避免超长和高成本。", "When designing AI tools, control input length, summarization strategy, and output format to avoid overlength and high cost.", "Token 不等于一个汉字或一个英文单词。", "A token is not exactly one Chinese character or one English word.", "为什么长文档问答不能只靠一次性全部粘贴？", "Why can't long-document Q&A rely only on pasting everything at once?"),
    foundation("上下文窗口", "Context Window", "上下文窗口是模型一次能看到的内容范围，超出范围的内容可能被截断或忽略。", "The context window is the amount of content a model can see at once. Content beyond it may be truncated or ignored.", [["短上下文：适合简短问答。", "Short context: good for brief Q&A."], ["长上下文：能放更多资料，但仍需组织。", "Long context: holds more material but still needs organization."], ["检索增强：用 RAG 只放相关片段。", "Retrieval augmentation: RAG inserts only relevant chunks."]], [["把一本书全部塞进 Prompt，不代表模型能稳定引用每个细节。", "Putting a whole book into a prompt does not mean the model can reliably use every detail."]], "上下文窗口限制推动了摘要、资料切分、RAG 和引用验证等设计。", "Context window limits drive designs like summarization, chunking, RAG, and citation checking.", "窗口大不等于答案一定准确，资料组织方式同样重要。", "A larger window does not guarantee accuracy; organization matters too.", "资料很长时，你会怎么让模型只看最相关的部分？", "When material is long, how would you make the model see only relevant parts?"),
    foundation("概率生成", "Probabilistic Generation", "大模型不是查固定答案表，而是根据上下文预测接下来更可能出现的内容。", "A large model does not look up a fixed answer table; it predicts likely next content based on context.", [["续写：根据前文生成后文。", "Continuation: generates next content from previous context."], ["改写：保持意思改变表达。", "Rewriting: changes wording while preserving meaning."], ["推理式回答：组织步骤但仍可能出错。", "Reasoning-style answer: organizes steps but can still be wrong."]], [["模型看到“API 像餐厅服务员”，会继续生成相关解释。", "After seeing 'API is like a waiter,' the model continues with related explanation."]], "理解概率生成能帮你知道为什么 AI 很会写，但也可能一本正经地错。", "Understanding probabilistic generation explains why AI writes fluently but can be confidently wrong.", "语言流畅不等于事实可靠。", "Fluent language does not mean reliable facts.", "你会如何验证一个听起来很专业的 AI 回答？", "How would you verify a professional-sounding AI answer?"),
    foundation("幻觉", "Hallucination", "幻觉是 AI 生成了看似合理但不真实或无依据的内容。", "Hallucination means AI generates content that sounds plausible but is false or unsupported.", [["事实幻觉：编造数据或来源。", "Factual hallucination: inventing data or sources."], ["代码幻觉：写出不存在的 API。", "Code hallucination: using nonexistent APIs."], ["引用幻觉：给出假链接或假论文。", "Citation hallucination: giving fake links or papers."]], [["AI 说某个库有函数 x，但官方文档里没有。", "AI says a library has function x, but the official docs do not."]], "AI 工作流必须设计来源、引用、测试和人工确认，减少幻觉带来的损失。", "AI workflows need sources, citations, tests, and human confirmation to reduce hallucination harm.", "幻觉不是语气问题，而是可靠性问题。", "Hallucination is not a tone issue; it is a reliability issue.", "遇到关键事实，你会要求来源、运行代码，还是直接复制？", "For key facts, will you ask for sources, run code, or copy directly?"),
    foundation("验证", "Validation", "验证是用运行、来源、官方文档、小实验或人工判断确认 AI 输出是否可靠。", "Validation checks whether AI output is reliable using execution, sources, official docs, small experiments, or human judgment.", [["代码验证：运行和测试。", "Code validation: run and test."], ["事实验证：查可靠来源。", "Fact validation: check reliable sources."], ["业务验证：让懂业务的人确认。", "Business validation: ask a domain expert."]], [["让 AI 写代码后，用最小输入跑一次，看结果是否符合预期。", "After AI writes code, run it with minimal input and check expected output."]], "验证是 AI 辅助工作的最后一公里，尤其适合合同、数据、医学、法律、财务等高风险内容。", "Validation is the last mile of AI-assisted work, especially for high-risk content like contracts, data, medical, legal, and finance.", "不要把 AI 的自信当成证据。证据来自运行、来源和可复查过程。", "Do not treat AI confidence as evidence. Evidence comes from execution, sources, and reviewable process.", "这条 AI 输出最小的验证动作是什么？", "What is the smallest validation action for this AI output?")
  ],
  day5: [
    foundation("任务拆解", "Task Breakdown", "任务拆解是把一个大目标拆成输入、步骤、输出和检查标准。", "Task breakdown turns a big goal into inputs, steps, outputs, and checking criteria.", [["目标：最终要得到什么。", "Goal: what final result is needed."], ["输入：已有资料和限制。", "Input: available material and constraints."], ["检查：如何判断结果可用。", "Check: how to judge usefulness."]], [["写报告可以拆成收集资料、提纲、初稿、核查、润色。", "Writing a report can be split into collecting material, outline, draft, verification, and polishing."]], "AI 更适合执行清楚的小任务；任务拆得越清楚，输出越可控。", "AI works better on clear small tasks; clearer breakdown makes output more controllable.", "不要把“帮我弄好”当 Prompt，AI 很难知道好在哪里。", "Do not use 'make it good' as a prompt; AI cannot know what good means.", "你能把一个工作任务拆成 3 个可检查步骤吗？", "Can you split one work task into three checkable steps?"),
    foundation("Prompt 模板", "Prompt Template", "Prompt 模板是可复用的任务说明框架，帮助你稳定给出背景、格式和标准。", "A prompt template is a reusable instruction structure that helps consistently provide context, format, and criteria.", [["角色 + 任务。", "Role + task."], ["背景 + 输入。", "Context + input."], ["输出格式 + 限制。", "Output format + constraints."]], [["请作为初学者老师，逐行解释代码，并列出可能错误。", "Act as a beginner teacher, explain the code line by line, and list possible errors."]], "模板能让 AI 输出更稳定，适合总结、改写、代码解释、方案生成。", "Templates make AI output more stable for summarization, rewriting, code explanation, and planning.", "模板不是咒语。资料不清、目标不清时，模板也救不了。", "A template is not magic. If context and goals are unclear, it cannot rescue the task.", "你的模板里有没有“输出格式”和“检查标准”？", "Does your template include output format and checking criteria?"),
    foundation("结构化输出", "Structured Output", "结构化输出是让 AI 按表格、清单、JSON 等固定格式返回，方便检查和继续处理。", "Structured output asks AI to return fixed formats such as tables, lists, or JSON for easier checking and processing.", [["表格：适合比较。", "Table: good for comparison."], ["清单：适合步骤。", "Checklist: good for steps."], ["JSON：适合给程序读取。", "JSON: good for programs to read."]], [["让 AI 输出“结论、依据、风险、下一步”四栏表。", "Ask AI to output four columns: conclusion, evidence, risks, next steps."]], "AI 工具常需要把模型结果变成固定字段，再展示、保存或交给下一步工作流。", "AI tools often need model output as fixed fields, then display, save, or pass it to the next workflow.", "格式整齐不等于内容正确，仍然要检查事实和来源。", "Clean format does not mean correct content; still check facts and sources.", "这次任务更适合自由段落、表格还是 JSON？为什么？", "Is this task better as free text, table, or JSON, and why?"),
    foundation("代码解释", "Code Explanation", "代码解释不是翻译每个词，而是说明数据从哪里来、经过什么函数、最后到哪里去。", "Code explanation is not word-by-word translation; it explains where data comes from, what functions process it, and where it goes.", [["逐行解释：适合初学。", "Line-by-line explanation: good for beginners."], ["数据流解释：适合理解整体。", "Data-flow explanation: good for understanding the whole."], ["错误点解释：适合调试。", "Bug-point explanation: good for debugging."]], [["让 AI 标出变量变化：text 从输入框来，summary 被写进结果区。", "Ask AI to mark variable changes: text comes from input, summary is written to result area."]], "你可以让 AI 当代码老师，但必须自己运行最小例子验证它说的对不对。", "You can use AI as a code teacher, but you must run minimal examples to verify it.", "不要只问“什么意思”；要问“输入、处理、输出分别是什么”。", "Do not only ask 'what does this mean'; ask 'what are input, processing, and output?'", "看一段代码时，你能先找输入和输出吗？", "When reading code, can you first find input and output?"),
    foundation("人工验证", "Human Verification", "人工验证是人来确认 AI 输出是否符合事实、业务、语气、风险和责任边界。", "Human verification means a person checks whether AI output fits facts, business context, tone, risks, and responsibility boundaries.", [["事实：来源是否可靠。", "Facts: are sources reliable?"], ["业务：是否符合真实需求。", "Business: does it fit the real need?"], ["风险：是否涉及隐私、版权、误导。", "Risk: privacy, copyright, or misleading issues."]], [["AI 写的客户邮件，发送前要由你确认事实和语气。", "Before sending an AI-written customer email, you should confirm facts and tone."]], "AI 能加速初稿，但最终交付仍需要人负责，尤其是对外内容和关键决策。", "AI can accelerate drafts, but final delivery still needs human responsibility, especially external content and key decisions.", "让 AI 生成不等于可以省略审核。", "AI generation does not mean review can be skipped.", "这个输出如果发错，会影响谁？需要谁确认？", "If this output is wrong, who is affected and who must confirm it?")
  ],
  day6: [
    foundation("Embedding", "Embedding", "Embedding 把文字变成数字向量，让电脑能比较“意思像不像”。", "Embedding turns text into numeric vectors so computers can compare semantic similarity.", [["文本 Embedding：给句子或段落做表示。", "Text embedding: represents sentences or paragraphs."], ["查询 Embedding：把用户问题也变成向量。", "Query embedding: turns user questions into vectors too."]], [["“报销规则”和“费用怎么申请”字面不同，但语义可能接近。", "\"Reimbursement policy\" and \"how to claim expenses\" differ literally but may be semantically close."]], "RAG 用 Embedding 找出和问题最相关的资料片段。", "RAG uses embeddings to find document chunks most related to the question.", "Embedding 不是答案，它只是帮助检索的表示方式。", "Embedding is not the answer; it is a representation used for retrieval.", "Embedding 在 RAG 里负责找资料还是负责写回答？", "In RAG, does embedding retrieve material or write the answer?"),
    foundation("向量", "Vector", "向量是一串数字，可以表示文字、图片等内容在某个语义空间里的位置。", "A vector is a list of numbers representing content such as text or images in a semantic space.", [["距离近：语义可能相似。", "Closer distance: meanings may be similar."], ["维度多：能表达复杂特征。", "Many dimensions: can express complex features."]], [["“年假申请”和“休假流程”的向量可能距离较近。", "Vectors for \"annual leave request\" and \"leave process\" may be close."]], "AI 检索系统通过比较向量距离来找相关资料。", "AI retrieval systems compare vector distance to find relevant material.", "向量不是给人直接阅读的文字，而是给机器比较的数字表示。", "A vector is not human-readable text; it is a numeric representation for machines.", "为什么向量搜索可能找到字面不同但意思相近的资料？", "Why can vector search find material with different words but similar meaning?"),
    foundation("向量数据库", "Vector Database", "向量数据库保存向量，并能快速搜索最相似的内容。", "A vector database stores vectors and quickly searches the most similar content.", [["存储：保存文本片段和向量。", "Storage: stores text chunks and vectors."], ["检索：按相似度找片段。", "Retrieval: finds chunks by similarity."], ["元数据：保存来源、标题、时间。", "Metadata: stores source, title, time."]], [["内部知识库会把制度文档切成片段，向量化后存入向量数据库。", "An internal knowledge base chunks policy documents, embeds them, and stores them in a vector database."]], "RAG 常用向量数据库把“相关资料”找出来再交给 LLM。", "RAG often uses a vector database to find relevant material before handing it to the LLM.", "向量数据库不负责生成最终答案。", "A vector database does not generate the final answer.", "如果检索到的资料错了，模型回答会怎样？", "If retrieved material is wrong, what may happen to the model answer?"),
    foundation("RAG", "Retrieval-Augmented Generation", "RAG 是检索增强生成：先找资料，再让模型基于资料生成答案。", "RAG means Retrieval-Augmented Generation: retrieve material first, then let the model generate based on it.", [["Retrieval：检索资料。", "Retrieval: search for material."], ["Augmented：把资料增强到上下文里。", "Augmented: add material into context."], ["Generation：模型生成回答。", "Generation: the model writes the answer."]], [["问公司制度时，系统先找制度片段，再总结给你。", "For company policy questions, the system first finds policy chunks, then summarizes them."]], "RAG 适合私有资料、长文档、知识库和需要引用来源的问答。", "RAG is useful for private documents, long documents, knowledge bases, and Q&A needing sources.", "RAG 不能保证 100% 正确；检索和资料质量仍要验证。", "RAG cannot guarantee 100% correctness; retrieval and source quality still need validation.", "如果问题依赖你的私人文档，为什么普通 Prompt 不够？", "If a question depends on your private documents, why is a normal prompt not enough?"),
    foundation("Agent", "Agent", "Agent 是围绕目标分步骤行动、调用工具、观察结果并继续推进的 AI 系统。", "An agent is an AI system that works toward a goal by planning steps, calling tools, observing results, and continuing.", [["计划：决定下一步。", "Plan: decide next step."], ["行动：调用工具或生成内容。", "Act: call tools or generate content."], ["观察：读取工具结果。", "Observe: read tool results."]], [["自动研究助手可以先搜索资料、整理表格、再生成报告草稿。", "An automated research assistant can search material, organize a table, then draft a report."]], "Agent 适合多步骤任务，但越能行动，越要权限、日志和人工确认。", "Agents fit multi-step tasks, but more action requires permissions, logs, and human confirmation.", "Agent 不是普通聊天机器人；它可能影响真实系统。", "An agent is not a normal chatbot; it may affect real systems.", "这个任务需要 AI 真正行动，还是只需要给建议？", "Does this task need AI to act, or only give advice?"),
    foundation("Tool Calling", "Tool Calling", "Tool Calling 是让模型按结构化方式请求外部工具，例如搜索、数据库、日历或计算器。", "Tool calling lets a model request external tools in a structured way, such as search, databases, calendars, or calculators.", [["读取工具：查资料、查数据库。", "Read tools: search material or database."], ["写入工具：发邮件、创建任务。", "Write tools: send email or create tasks."], ["计算工具：做精确运算。", "Compute tools: perform exact calculations."]], [["模型发现需要查库存，就调用库存查询工具，而不是凭空猜。", "If the model needs inventory, it calls the inventory lookup tool instead of guessing."]], "Tool Calling 把 LLM 连接到真实系统，是 Agent 和自动化的重要基础。", "Tool calling connects LLMs to real systems and is a foundation for agents and automation.", "工具调用必须有权限控制，尤其是写入、发送、删除等动作。", "Tool calling needs permission control, especially for write, send, and delete actions.", "这个工具调用会不会修改真实数据？需要确认吗？", "Will this tool call modify real data? Does it need confirmation?"),
    foundation("Workflow", "Workflow", "Workflow 是一组可控步骤：先做什么、后做什么、失败怎么办。", "A workflow is a controlled set of steps: what happens first, next, and what to do on failure.", [["线性流程：一步接一步。", "Linear flow: step after step."], ["条件流程：根据结果分支。", "Conditional flow: branches based on results."], ["人工确认：关键节点由人确认。", "Human approval: key points require human confirmation."]], [["客户反馈工作流：收集 → 分类 → 总结 → 人工复核 → 生成回复。", "Customer feedback workflow: collect → classify → summarize → human review → draft reply."]], "很多 AI 应用先做工作流会比直接做 Agent 更稳、更容易检查。", "Many AI apps are more stable and checkable as workflows before becoming agents.", "工作流不是越自动越好，关键是可控、可追踪、可回滚。", "More automation is not always better; control, traceability, and rollback matter.", "你的工作任务能拆成哪几个固定步骤？", "What fixed steps can your work task be split into?")
  ],
  day7: [
    foundation("需求文档", "Requirement Document", "需求文档说明工具给谁用、解决什么问题、输入输出是什么、如何判断成功。", "A requirement document explains who the tool is for, what problem it solves, input/output, and success criteria.", [["用户：谁会用。", "User: who uses it."], ["场景：什么时候用。", "Scenario: when it is used."], ["约束：不能做什么。", "Constraints: what it must not do."]], [["AI 学习助手需求：输入主题，输出 7 天计划、练习和验证清单。", "AI learning assistant requirement: input a topic, output a 7-day plan, exercises, and validation checklist."]], "需求越清楚，AI 帮你生成原型、Prompt 和接口设计就越可靠。", "Clear requirements make AI-generated prototypes, prompts, and API designs more reliable.", "不要先问用什么模型；先问要解决什么真实问题。", "Do not first ask which model to use; first ask what real problem to solve.", "你能用一句话说出工具目标用户和核心问题吗？", "Can you state the target user and core problem in one sentence?"),
    foundation("输入 / 输出", "Input / Output", "输入是用户或系统给工具的资料，输出是工具返回给用户或下一步系统的结果。", "Input is material given to a tool by the user or system. Output is the result returned to the user or next system.", [["文本输入：主题、文章、问题。", "Text input: topic, article, question."], ["文件输入：PDF、表格、图片。", "File input: PDF, spreadsheet, image."], ["结构化输出：表格、JSON、步骤。", "Structured output: table, JSON, steps."]], [["输入学习主题“API”，输出学习计划、练习题、Prompt 模板。", "Input learning topic 'API', output a plan, exercises, and prompt templates."]], "AI 工具设计要先定清输入输出，否则很难判断模型结果是否可用。", "AI tool design must define input/output first, otherwise model output is hard to judge.", "输出好看不代表满足需求，要回到输入和成功标准检查。", "Pretty output does not mean it meets the need; check input and success criteria.", "这个工具的输入最少需要什么？输出必须包含什么？", "What minimum input does this tool need? What must the output include?"),
    foundation("成功标准", "Success Criteria", "成功标准是判断工具好不好用的具体规则，而不是主观觉得不错。", "Success criteria are concrete rules for judging whether the tool works well, not just feeling good.", [["准确性：事实是否正确。", "Accuracy: are facts correct?"], ["可用性：用户能不能直接行动。", "Usability: can the user act on it?"], ["安全性：是否避开隐私和风险。", "Safety: does it avoid privacy and risk issues?"]], [["总结工具成功标准：摘要不编造事实、列出待核查点、结构清楚。", "Summarizer criteria: no invented facts, lists items to verify, clear structure."]], "AI 输出要用标准评估，才能持续改 Prompt、流程和产品。", "AI output needs evaluation criteria so prompts, workflows, and products can improve.", "“感觉不错”不是标准；标准要能被检查。", "\"Feels good\" is not a criterion; a criterion must be checkable.", "你能给自己的 AI 工具写 3 条可检查标准吗？", "Can you write three checkable criteria for your AI tool?"),
    foundation("风险", "Risk", "风险是工具可能造成的错误、泄露、误导、成本、延迟或责任问题。", "Risk means possible errors, leaks, misleading output, cost, latency, or responsibility problems.", [["隐私：敏感输入外泄。", "Privacy: sensitive input leaks."], ["幻觉：错误答案被当真。", "Hallucination: false answers treated as true."], ["权限：工具做了不该做的事。", "Permission: tool does something it should not."]], [["AI 自动发邮件前必须有人确认，避免误发和事实错误。", "Before AI sends email automatically, a human must confirm to avoid wrong sending and factual errors."]], "越接近真实业务，越要设计权限、日志、确认点和失败兜底。", "The closer to real business, the more you need permissions, logs, approval points, and fallbacks.", "风险不是上线后再想；从原型阶段就要列清楚。", "Risk is not something to think about only after launch; list it from prototype stage.", "这个 AI 工具最坏会错在哪里？谁会受影响？", "Where could this AI tool fail worst, and who is affected?"),
    foundation("原型", "Prototype", "原型是先用最小成本验证流程和体验的版本，可以先模拟 AI 结果。", "A prototype is a low-cost version for validating flow and experience. It can simulate AI output first.", [["静态原型：只验证界面和交互。", "Static prototype: validates interface and interaction."], ["模拟原型：用假数据模拟模型结果。", "Simulated prototype: uses fake data to simulate model output."], ["可用原型：接入后端和真实 API。", "Functional prototype: connects backend and real API."]], [["当前训练营的总结器是模拟原型，不调用真实 AI API。", "The summarizer in this bootcamp is a simulated prototype and does not call a real AI API."]], "先用原型确认用户知道怎么输入、结果是否可读，再升级真实模型。", "Use a prototype first to check whether users know what to enter and whether results are readable, then upgrade to a real model.", "原型不是最终产品，不能假装已经解决安全和质量问题。", "A prototype is not the final product; it must not pretend safety and quality are solved.", "这个原型验证的是流程、视觉、数据，还是模型质量？", "Does this prototype validate flow, visuals, data, or model quality?"),
    foundation("后端", "Backend", "后端是前端背后的服务层，负责安全调用真实 API、保存数据、处理权限和错误。", "The backend is the service layer behind the frontend. It safely calls real APIs, stores data, handles permissions and errors.", [["接口层：给前端调用。", "API layer: called by the frontend."], ["安全层：保护 Key 和权限。", "Security layer: protects keys and permissions."], ["业务层：处理任务逻辑。", "Business layer: handles task logic."]], [["真实 AI 助手：前端提交主题，后端读取环境变量里的 Key，再调用模型。", "Real AI assistant: frontend submits topic, backend reads the key from environment variables, then calls the model."]], "从静态模拟升级真实 AI，后端是保护密钥和控制风险的关键。", "When upgrading from static simulation to real AI, the backend is key for protecting secrets and controlling risk.", "后端不是可有可无；只要涉及真实密钥和私有数据，通常就需要它。", "The backend is not optional when real secrets and private data are involved.", "你的工具为什么需要或不需要后端？", "Why does your tool need or not need a backend?"),
    foundation("真实 API 升级路径", "Real API Upgrade Path", "真实 API 升级是从静态模拟走向可用产品的过程：前端、后端、密钥、模型、错误处理、部署逐步补齐。", "The real API upgrade path moves from static simulation to usable product: frontend, backend, secrets, model, error handling, and deployment.", [["第一步：保留前端体验。", "Step one: keep the frontend experience."], ["第二步：增加后端接口。", "Step two: add backend API."], ["第三步：后端调用模型并处理失败。", "Step three: backend calls model and handles failures."]], [["把“模拟总结”替换为：POST 到自己的后端 → 后端调用模型 → 返回 JSON。", "Replace simulated summary with: POST to your backend → backend calls model → returns JSON."]], "升级时要同时考虑费用、延迟、错误提示、隐私提醒和日志评估。", "During upgrade, also consider cost, latency, error messages, privacy notices, and logging/evaluation.", "不要直接在静态网页里写模型 API Key，这是最常见也最危险的错误。", "Do not write the model API key directly into the static page. It is common and dangerous.", "从当前静态原型升级真实 AI，你能列出前三个工程步骤吗？", "Can you list the first three engineering steps to upgrade this static prototype to real AI?")
  ]
};

const starterProjects = [
  ["Python 字数统计器", "输入一段文字，统计字数、字符数和关键词。", "Python、字符串、字典、函数", "低", "让 AI 解释每一行 Python，再由你运行验证。"],
  ["文章总结模拟器", "输入文章，输出摘要、关键词、待核查事实。", "文本处理、结果展示", "中", "让 AI 帮你设计摘要格式。"],
  ["Prompt 评估表", "给 Prompt 打分：目标、背景、格式、限制是否清楚。", "表单、评分规则", "中", "让 AI 给评分标准初稿。"],
  ["JSON 观察器", "输入 JSON，解释每个字段含义。", "字典、列表、JSON", "中", "让 AI 帮你生成样例数据。"]
];

const nextProjects = [
  ["真实 AI 总结工具", "后端保护密钥，Python 或前端提交文本，模型返回总结。", "Python requests、API、POST、后端、密钥安全", "中高", "让 AI 拆接口和错误处理。"],
  ["个人知识库 RAG", "上传资料，检索相关片段后回答。", "Embedding、向量数据库、RAG", "高", "让 AI 帮你设计资料切分。"],
  ["工作流 Agent", "把一个工作任务拆成多步，并调用工具。", "Agent、Tool calling、日志", "高", "让 AI 帮你列风险和评估指标。"],
  ["AI 输出质检器", "检查摘要是否有来源、是否遗漏、是否有不确定点。", "评估、校验、Prompt", "中高", "让 AI 生成检查清单。"]
];

const defaultState = {
  completedLessons: {},
  exerciseAnswers: {},
  wrongBook: {},
  xp: 0,
  badges: {},
  theme: "light",
  commitment: "",
  finalQuizScore: null
};

let state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}

function englishFor(text) {
  return EN_TEXT[text] || "";
}

function bilingual(text, english = englishFor(text), blockClass = "") {
  if (!text) return "";
  const extraClass = blockClass ? ` ${blockClass}` : "";
  return english
    ? `<span class="bilingual${extraClass}"><span class="zh">${text}</span><span class="en">${english}</span></span>`
    : `<span class="zh">${text}</span>`;
}

function bilingualPlain(text, english = englishFor(text)) {
  return english ? `${text} / ${english}` : text;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderFoundationText(value) {
  if (!value) return "";
  if (typeof value === "string") return bilingual(value);
  return bilingual(value.zh, value.en);
}

function renderFoundationList(titleZh, titleEn, items = []) {
  if (!items.length) return "";
  return `
    <div class="foundation-part">
      <h5>${bilingual(titleZh, titleEn)}</h5>
      <ul class="foundation-list">
        ${items.map((item) => `<li>${renderFoundationText(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderFoundationCard(item) {
  return `
    <article class="foundation-card">
      <div class="foundation-card-head">
        <h4>${item.name}</h4>
        <span>${item.englishName}</span>
      </div>
      <div class="foundation-part">
        <h5>${bilingual("这是什么", "What it is")}</h5>
        <p>${renderFoundationText(item.what)}</p>
      </div>
      ${renderFoundationList("常见类型 / 常见形式", "Common types / forms", item.types)}
      ${renderFoundationList("具体例子", "Concrete examples", item.examples)}
      ${item.code ? `<pre class="foundation-code"><code>${escapeHtml(item.code)}</code></pre>` : ""}
      <div class="foundation-part">
        <h5>${bilingual("在 AI 工具里怎么用", "How it is used in AI tools")}</h5>
        <p>${renderFoundationText(item.aiUsage)}</p>
      </div>
      <div class="foundation-part foundation-mistake">
        <h5>${bilingual("常见误区", "Common confusion")}</h5>
        <p>${renderFoundationText(item.mistake)}</p>
      </div>
      <div class="foundation-check">
        <strong>${bilingual("做题前自查", "Self-check before exercises")}</strong>
        <p>${renderFoundationText(item.selfCheck)}</p>
      </div>
    </article>
  `;
}

function renderFoundations(dayId) {
  const items = lessonFoundations[dayId] || [];
  if (!items.length) return "";
  return `
    <section class="foundation-section">
      <div class="foundation-head">
        <p class="section-kicker">${bilingual("前置概念课", "Foundation lesson")}</p>
        <h3>${bilingual("先学会这些，再做题", "Learn these first, then practice")}</h3>
        <p>${bilingual("每张卡先回答“是什么”，再给常见形式、具体例子、AI 工具里的用途、常见误区和做题前自查。看完这些，再进入作业会更稳。", "Each card first answers what the concept is, then shows common forms, examples, how it appears in AI tools, common confusion, and a self-check before exercises.")}</p>
      </div>
      <div class="foundation-grid">
        ${items.map(renderFoundationCard).join("")}
      </div>
    </section>
  `;
}

function isCorrect(exercise, value) {
  if (exercise.type === "single") return Number(value) === exercise.answer;
  if (exercise.type === "multi") {
    const selected = (value || []).map(Number).sort((a, b) => a - b);
    return JSON.stringify(selected) === JSON.stringify([...exercise.answer].sort((a, b) => a - b));
  }
  if (exercise.type === "order") {
    const expectedPositions = Array(exercise.answer.length);
    exercise.answer.forEach((optionIndex, orderIndex) => {
      expectedPositions[optionIndex] = orderIndex;
    });
    return JSON.stringify((value || []).map(Number)) === JSON.stringify(expectedPositions);
  }
  if (exercise.type === "fill") return exercise.answer.some((item) => normalize(item) === normalize(value));
  return false;
}

function answerText(exercise) {
  if (exercise.type === "single") return exercise.options[exercise.answer];
  if (exercise.type === "multi") return exercise.answer.map((index) => exercise.options[index]).join("、");
  if (exercise.type === "order") return exercise.answer.map((index) => exercise.options[index]).join(" → ");
  if (exercise.type === "fill") return exercise.answer[0];
  return "";
}

function allExercises() {
  return [...courseDays.flatMap((day) => [...day.exercises, ...day.quiz]), ...finalQuiz];
}

function getExercise(id) {
  return allExercises().find((item) => item.id === id);
}

function flatTerms() {
  return glossaryGroups.flatMap(([group, terms]) => terms.map((item) => {
    item.group = group;
    return item;
  }));
}

function findTerm(termName) {
  const target = normalize(termName);
  return flatTerms().find((item) => normalize(item.term) === target || item.aliases?.some((alias) => normalize(alias) === target));
}

function renderCoreTerms(terms = []) {
  const cards = terms.map(findTerm).filter(Boolean);
  if (!cards.length) return "";
  return `
    <div class="core-terms">
      <h3>今日核心概念</h3>
      <p class="core-term-hint">先看卡片上的简短解释；如果还不懂，点击卡片展开案例和类比。</p>
      <div class="core-term-grid">
        ${cards.map((item) => `
          <details class="core-term-card">
            <summary>
              <strong>${item.term}</strong>
              <span>${item.fullName}</span>
              <p>${item.translation}：${item.plainExplanation}</p>
              <p class="en">${item.fullName}: ${item.aiUsage}</p>
              <em>看不懂？点开例子 · Need more? Open examples</em>
            </summary>
            ${renderDeepDive(item)}
          </details>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCourse() {
  document.querySelector("#badgeShelf").innerHTML = courseDays
    .map((day) => `<span data-badge="${day.id}">${day.badge}</span>`)
    .join("");

  document.querySelector("#courseList").innerHTML = courseDays
    .map((day, index) => `
      <article class="day-card" data-day="${day.id}">
        <button class="day-toggle" type="button" aria-expanded="${index === 0}">
          <span>${day.day}</span>
          <strong>${bilingual(day.title)}</strong>
          <em>${bilingual(day.subtitle)}</em>
        </button>
        <div class="day-content" ${index === 0 ? "" : "hidden"}>
          <div class="objective-grid">
            ${day.objectives.map((item) => `<div><strong>${bilingual("目标", "Goal")}</strong><span>${bilingual(item)}</span></div>`).join("")}
          </div>
          ${renderFoundations(day.id)}
          ${renderCoreTerms(day.coreTerms)}
          <div class="lesson-blocks">
            ${day.sections.map((section) => `<article><h3>${bilingual(section.heading)}</h3><p>${bilingual(section.body)}</p></article>`).join("")}
          </div>
          <div class="lesson-actions">
            <button class="button lesson-complete" type="button" data-lesson="${day.id}">标记已读懂本课</button>
            <span class="lesson-status" data-lesson-status="${day.id}"></span>
          </div>
          <h3>${bilingual("本课作业：即时批改", "Practice: instant grading")}</h3>
          <div class="exercise-list">
            ${day.exercises.map(renderExercise).join("")}
          </div>
          <h3>${bilingual("章节测验：全对后点亮徽章", "Chapter quiz: unlock the badge after all answers are correct")}</h3>
          <div class="exercise-list quiz-list">
            ${day.quiz.map(renderExercise).join("")}
          </div>
          <div class="reflection-box">
            <h3>${bilingual("开放式反思", "Open reflection")}</h3>
            <p>${bilingual(day.reflection)}</p>
            <p class="muted">${bilingual("这类题不做机器判分。请对照参考答案检查：是否说清楚对象、流程、风险和验证方式。", "This kind of task is not machine-graded. Use the reference answer to check whether you explained the actors, flow, risks, and verification method clearly.")}</p>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function renderExercise(exercise) {
  const saved = state.exerciseAnswers[exercise.id];
  return `
    <article class="exercise-card ${saved ? (saved.correct ? "is-correct" : "is-wrong") : ""}" data-exercise="${exercise.id}">
      <div class="exercise-head">
        <h4>${bilingual(exercise.prompt)}</h4>
        <span class="knowledge-tag">${bilingualPlain(exercise.category || exercise.knowledge || exercise.type)}</span>
      </div>
      ${renderExerciseInput(exercise, saved?.value)}
      <div class="exercise-actions">
        <button class="button small grade-btn" type="button" data-grade="${exercise.id}">提交批改</button>
        <button class="button small ghost reset-answer" type="button" data-reset="${exercise.id}">重做</button>
      </div>
      <div class="feedback" data-feedback="${exercise.id}">
        ${saved ? feedbackHtml(exercise, saved.correct) : ""}
      </div>
    </article>
  `;
}

function renderExerciseInput(exercise, value) {
  if (exercise.type === "single") {
    return `<div class="option-list">${exercise.options.map((option, index) => `
      <label><input type="radio" name="${exercise.id}" value="${index}" ${Number(value) === index ? "checked" : ""}>${bilingual(option)}</label>
    `).join("")}</div>`;
  }
  if (exercise.type === "multi") {
    const values = value || [];
    return `<div class="option-list">${exercise.options.map((option, index) => `
      <label><input type="checkbox" name="${exercise.id}" value="${index}" ${values.includes(index) ? "checked" : ""}>${bilingual(option)}</label>
    `).join("")}</div>`;
  }
  if (exercise.type === "order") {
    const values = value || [];
    return `<div class="order-list">${exercise.options.map((option, index) => `
      <label><span>${bilingual(option)}</span><select data-order="${exercise.id}" data-index="${index}">
        <option value="">选择顺序</option>
        ${exercise.options.map((_, orderIndex) => `<option value="${orderIndex}" ${values[index] === orderIndex ? "selected" : ""}>第 ${orderIndex + 1} 步</option>`).join("")}
      </select></label>
    `).join("")}</div>`;
  }
  return `<input class="fill-input" data-fill="${exercise.id}" value="${value || ""}" placeholder="输入你的答案" />`;
}

function feedbackHtml(exercise, correct) {
  const review = exercise.review ? `<p><strong>建议回看：</strong>${exercise.review}</p>` : "";
  const memory = exercise.memory ? `<p><strong>最短记忆句：</strong>${exercise.memory}</p>` : "";
  const mistake = exercise.mistakeHint || "当前答案没有匹配关键知识点。";
  return `
    <div class="${correct ? "good" : "bad"}">
      <strong>${correct ? "回答正确" : "回答错误"}</strong>
      <p>${correct ? bilingual(exercise.explanation) : bilingual(`错在这里：${mistake} 正确答案：${answerText(exercise)}。${exercise.explanation}`)}</p>
      ${correct ? memory : `${memory}${review}`}
    </div>
  `;
}

function getInputValue(exercise) {
  const card = document.querySelector(`[data-exercise="${exercise.id}"]`);
  if (exercise.type === "single") {
    const checked = card.querySelector(`input[name="${exercise.id}"]:checked`);
    return checked ? Number(checked.value) : null;
  }
  if (exercise.type === "multi") {
    return Array.from(card.querySelectorAll(`input[name="${exercise.id}"]:checked`)).map((input) => Number(input.value));
  }
  if (exercise.type === "order") {
    return Array.from(card.querySelectorAll(`[data-order="${exercise.id}"]`)).map((select) => select.value === "" ? -1 : Number(select.value));
  }
  return card.querySelector(`[data-fill="${exercise.id}"]`).value;
}

function gradeExercise(id) {
  const exercise = getExercise(id);
  const value = getInputValue(exercise);
  if (value === null || (Array.isArray(value) && value.some((item) => item === -1))) {
    showToast("请先完成这道题");
    return;
  }
  const correct = isCorrect(exercise, value);
  state.exerciseAnswers[id] = { value, correct, answeredAt: new Date().toISOString() };
  if (finalQuiz.some((item) => item.id === id)) {
    state.finalQuizScore = null;
  }
  if (!correct) {
    const old = state.wrongBook[id] || { count: 0 };
    state.wrongBook[id] = { count: old.count + 1, lastWrongAt: new Date().toISOString() };
  }
  saveState();
  refreshExerciseCard(id);
  updateProgress();
  renderWrongBook();
  showToast(correct ? `回答正确，+${CORRECT_XP} XP` : "已加入错题本");
}

function refreshExerciseCard(id) {
  const exercise = getExercise(id);
  const card = document.querySelector(`[data-exercise="${id}"]`);
  const saved = state.exerciseAnswers[id];
  card.classList.toggle("is-correct", Boolean(saved?.correct));
  card.classList.toggle("is-wrong", Boolean(saved && !saved.correct));
  card.querySelector(`[data-feedback="${id}"]`).innerHTML = saved ? feedbackHtml(exercise, saved.correct) : "";
}

function resetAnswer(id) {
  delete state.exerciseAnswers[id];
  if (finalQuiz.some((item) => item.id === id)) {
    state.finalQuizScore = null;
  }
  saveState();
  renderCourse();
  renderFinalQuiz();
  bindDynamicEvents();
  updateProgress();
}

function renderFinalQuiz() {
  document.querySelector("#finalQuiz").innerHTML = `
    <div class="exercise-list final-list">
      ${finalQuiz.map(renderExercise).join("")}
    </div>
    <div class="final-score">
      <button class="button primary" id="calculateFinal" type="button">计算最终测验结果</button>
      <div id="finalResult">${state.finalQuizScore !== null ? finalAdvice(state.finalQuizScore) : "完成题目后点击计算结果。"}</div>
    </div>
  `;
}

function finalAdvice(score) {
  if (score >= 85) return `最终得分 ${score} 分：你已经建立了很好的 AI 技术地图，下一步可以尝试接真实 API。`;
  if (score >= 60) return `最终得分 ${score} 分：基础地图已经成形，建议复习错题本里的网络、代码和 RAG 题。`;
  return `最终得分 ${score} 分：先别急着做复杂项目，建议重学 Day 1-4，把基础链路补稳。`;
}

function calculateFinal() {
  const answered = finalQuiz.filter((item) => state.exerciseAnswers[item.id]);
  if (answered.length < finalQuiz.length) {
    showToast("请先完成所有最终测验题");
    return;
  }
  const correct = finalQuiz.filter((item) => state.exerciseAnswers[item.id]?.correct).length;
  const score = Math.round((correct / finalQuiz.length) * 100);
  state.finalQuizScore = score;
  saveState();
  document.querySelector("#finalResult").textContent = finalAdvice(score);
  updateProgress();
}

function markLesson(dayId) {
  state.completedLessons[dayId] = true;
  saveState();
  updateProgress();
  showToast(`本课已标记完成，+${READ_XP} XP`);
}

function hasDayMasteryEvidence(day) {
  const read = state.completedLessons[day.id];
  const hasCurrentAnswer = (item) => Boolean(state.exerciseAnswers[item.id]?.answeredAt);
  const practiceAnswered = day.exercises.length > 0 && day.exercises.every(hasCurrentAnswer);
  const quizCorrect = day.quiz.length > 0 && day.quiz.every((item) => state.exerciseAnswers[item.id]?.correct && state.exerciseAnswers[item.id]?.answeredAt);
  return read && practiceAnswered && quizCorrect;
}

function dayBadgeUnlocked(day) {
  const index = courseDays.findIndex((item) => item.id === day.id);
  if (index < 0) return false;
  return courseDays.slice(0, index + 1).every(hasDayMasteryEvidence);
}

function getDayVisualState(day) {
  const read = Boolean(state.completedLessons[day.id]);
  const mastered = dayBadgeUnlocked(day);
  return {
    read,
    mastered,
    statusText: mastered ? "已掌握" : read ? "已读懂，继续完成测验" : "未标记"
  };
}

function updateProgress() {
  const all = allExercises();
  const answered = all.filter((item) => state.exerciseAnswers[item.id]);
  const correct = all.filter((item) => state.exerciseAnswers[item.id]?.correct);
  const completedLessons = courseDays.filter((day) => state.completedLessons[day.id]).length;
  const totalUnits = courseDays.length + all.length + 1;
  const finalDone = state.finalQuizScore !== null ? 1 : 0;
  const doneUnits = completedLessons + answered.length + finalDone;
  const percent = Math.round((doneUnits / totalUnits) * 100);
  const badges = courseDays.filter(dayBadgeUnlocked);
  const xp = completedLessons * READ_XP + correct.length * CORRECT_XP + (state.finalQuizScore !== null ? FINAL_XP : 0);
  const accuracy = answered.length ? `${Math.round((correct.length / answered.length) * 100)}%` : "--";
  state.xp = xp;
  state.badges = Object.fromEntries(courseDays.map((day) => [day.id, dayBadgeUnlocked(day)]));
  saveState();

  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#ringLabel").textContent = `${percent}%`;
  document.querySelector(".ring").style.setProperty("--progress", `${percent}%`);
  document.querySelector("#xpCount").textContent = xp;
  document.querySelector("#accuracyText").textContent = accuracy;
  document.querySelector("#wrongCount").textContent = Object.keys(state.wrongBook).length;
  document.querySelector("#levelText").textContent = xp >= 700 ? "原型设计者" : xp >= 420 ? "AI 协作者" : xp >= 200 ? "技术入门者" : "技术新手";
  document.querySelector("#encouragementText").textContent =
    percent >= 90 ? "你已经接近完成训练营，可以准备真实项目了。" :
    Object.keys(state.wrongBook).length ? "错题本就是你的下一张学习地图。" :
    "先建立地图，再追求速度。";

  courseDays.forEach((day) => {
    const visualState = getDayVisualState(day);
    const card = document.querySelector(`[data-day="${day.id}"]`);
    const status = document.querySelector(`[data-lesson-status="${day.id}"]`);
    const button = document.querySelector(`[data-lesson="${day.id}"]`);

    status.textContent = visualState.statusText;
    button.textContent = visualState.read ? "已标记读懂" : "标记已读懂本课";
    button.disabled = visualState.read;
    document.querySelector(`[data-badge="${day.id}"]`)?.classList.toggle("unlocked", visualState.mastered);
    card?.classList.remove("learned");
    card?.classList.toggle("completed", visualState.mastered);
  });
}

function renderWrongBook() {
  const list = document.querySelector("#wrongBookList");
  const ids = Object.keys(state.wrongBook);
  if (!ids.length) {
    list.innerHTML = `<article class="empty-card"><h3>暂时没有错题</h3><p>答错的题会自动出现在这里。保持好奇，不怕暴露盲区。</p></article>`;
    return;
  }
  list.innerHTML = ids.map((id) => {
    const ex = getExercise(id);
    const item = state.wrongBook[id];
    return `<article class="wrong-card">
      <h3>${ex.prompt}</h3>
      <p><strong>正确答案：</strong>${answerText(ex)}</p>
      <p><strong>解析：</strong>${ex.explanation}</p>
      <p class="muted">错误次数：${item.count} · 最近错误：${new Date(item.lastWrongAt).toLocaleString("zh-CN")}</p>
      <button class="button small ghost jump-exercise" data-jump="${id}" type="button">回到题目</button>
    </article>`;
  }).join("");
}

function renderGlossary(filter = "") {
  const keyword = normalize(filter);
  const grid = document.querySelector("#glossaryGrid");
  const groups = glossaryGroups
    .map(([group, terms]) => [group, terms.filter((item) => normalize(`${item.term}${item.fullName}${item.translation}${item.plainExplanation}${item.aiUsage}${item.commonMistake}${item.deeperExplanation}${item.analogy}${item.concreteExample}${item.inThisSite}${item.distinction}${item.selfCheck}${item.aliases?.join("")}${group}`).includes(keyword))])
    .filter(([, terms]) => terms.length);
  grid.innerHTML = groups.length
    ? groups.map(([group, terms]) => `<article class="term-group"><h3>${bilingual(group)}</h3>${terms.map(renderTermCard).join("")}</article>`).join("")
    : `<article class="term-group"><h3>${bilingual("没有找到", "No result found")}</h3><p>${bilingual("换一个关键词试试，例如 API、模型、状态码。", "Try another keyword, such as API, model, or status code.")}</p></article>`;
}

function renderTermCard(item) {
  return `
    <details class="term-card">
      <summary>
        <strong>${item.term}</strong>
        <span>${item.translation}</span>
      </summary>
      <p><b>${bilingual("英文全称", "Full English name")}：</b>${item.fullName}</p>
      <p><b>${bilingual("生活化解释", "Plain-language explanation")}：</b>${bilingual(item.plainExplanation)}</p>
      <p><b>${bilingual("AI 应用里的作用", "Role in AI applications")}：</b>${bilingual(item.aiUsage)}</p>
      <p><b>${bilingual("常见误区 / 风险", "Common misunderstanding / risk")}：</b>${bilingual(item.commonMistake)}</p>
      ${renderDeepDive(item)}
    </details>
  `;
}

function renderDeepDive(item) {
  return `
    <div class="deep-dive">
      <section>
        <h4>${bilingual("如果还不懂，看这里", "If it is still unclear, read this")}</h4>
        <p>${bilingual(item.deeperExplanation)}</p>
        <p><strong>${bilingual("生活类比", "Analogy")}：</strong>${bilingual(item.analogy)}</p>
      </section>
      <section>
        <h4>${bilingual("具体例子", "Concrete example")}</h4>
        <p>${bilingual(item.concreteExample)}</p>
        <p><strong>${bilingual("在这个网站里", "In this website")}：</strong>${bilingual(item.inThisSite)}</p>
      </section>
      <section>
        <h4>${bilingual("和别的概念怎么区分", "How to distinguish it from related ideas")}</h4>
        <p>${bilingual(item.distinction)}</p>
      </section>
      <section class="self-check">
        <h4>${bilingual("自查一句话", "One-sentence self-check")}</h4>
        <p>${bilingual(item.selfCheck)}</p>
      </section>
    </div>
  `;
}

function renderAcronymReference(filter = "") {
  const keyword = normalize(filter);
  const terms = flatTerms().filter((item) => {
    const text = `${item.term}${item.fullName}${item.translation}${item.plainExplanation}${item.aiUsage}${item.commonMistake}${item.deeperExplanation}${item.analogy}${item.concreteExample}${item.inThisSite}${item.distinction}${item.selfCheck}${item.group}${item.aliases?.join("")}`;
    const hasUppercaseOrKnown = /^[A-Z0-9 ]+$/.test(item.term) || ["JavaScript", "Prompt", "Token", "Embedding", "Agent", "Workflow"].includes(item.term);
    return hasUppercaseOrKnown && normalize(text).includes(keyword);
  });
  const grid = document.querySelector("#acronymGrid");
  grid.innerHTML = terms.length
    ? terms.map((item) => `
      <article class="acronym-card">
        <div>
          <strong>${item.term}</strong>
          <span>${bilingualPlain(item.group)}</span>
        </div>
        <p class="full-name">${item.fullName}</p>
        <p><b>${bilingual("中文", "Chinese")}：</b>${item.translation}</p>
        <p>${bilingual(item.plainExplanation)}</p>
        <p><b>${bilingual("常见误区", "Common misunderstanding")}：</b>${bilingual(item.commonMistake)}</p>
      </article>
    `).join("")
    : `<article class="empty-card"><h3>${bilingual("没有找到", "No result found")}</h3><p>${bilingual("试试 API、RAG、LLM、DNS、JSON 或中文翻译。", "Try API, RAG, LLM, DNS, JSON, or a Chinese translation.")}</p></article>`;
}

function renderConceptMaps() {
  document.querySelector("#conceptMaps").innerHTML = conceptMaps.map((map) => `
    <article class="concept-map-card">
      <h3>${bilingual(map.title)}</h3>
      <p>${bilingual(map.summary)}</p>
      <div class="map-flow">
        ${map.steps.map((step) => `<span>${bilingual(step)}</span>`).join("")}
      </div>
      <p class="checkpoint"><strong>${bilingual("掌握标准", "Mastery check")}：</strong>${bilingual(map.checkpoint)}</p>
    </article>
  `).join("");
}

function renderProjects(targetId, projects) {
  document.querySelector(targetId).innerHTML = projects.map(([title, goal, knowledge, difficulty, aiHelp]) => `
    <article class="project-card">
      <h4>${bilingual(title)}</h4>
      <p><strong>${bilingual("项目目标", "Project goal")}：</strong>${bilingual(goal)}</p>
      <p><strong>${bilingual("用到的知识", "Knowledge used")}：</strong>${bilingual(knowledge)}</p>
      <p><strong>${bilingual("可以让 AI 帮忙", "How AI can help")}：</strong>${bilingual(aiHelp)}</p>
      <div class="project-meta"><span>${bilingual("难度", "Difficulty")}：${bilingualPlain(difficulty)}</span></div>
    </article>
  `).join("");
}

function makeSummary(text) {
  const clean = text.trim();
  if (!clean) return "请先输入一段文字。";
  const first = clean.split(/[。！？.!?]/).find(Boolean) || clean.slice(0, 60);
  return `模拟总结：主题可能是“${first.slice(0, 36)}${first.length > 36 ? "..." : ""}”。\n\n结构化结果：\n1. 核心观点：这段内容在说明一个问题或方法。\n2. 可行动点：提炼关键事实，再人工核查。\n3. 风险提醒：这只是静态模拟，不代表真实 AI 理解全文。`;
}

function makePlan(topic) {
  const task = topic.trim() || "整理一份工作报告";
  return `模拟 AI 工作流：${task}\n1. 明确目标：这件事要交付什么，给谁看。\n2. 收集输入：列出资料、限制、截止时间和判断标准。\n3. 让 AI 生成初稿：要求表格或清单输出，并标注不确定点。\n4. 人工验证：核查事实、数据、引用和业务判断，再定稿。`;
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
  document.querySelector(".theme-icon").textContent = theme === "dark" ? "☾" : "☼";
  document.querySelector(".theme-text").textContent = theme === "dark" ? "深色" : "浅色";
  saveState();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

function bindDynamicEvents() {
  document.querySelectorAll(".day-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;
    });
  });
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => markLesson(button.dataset.lesson)));
  document.querySelectorAll("[data-grade]").forEach((button) => button.addEventListener("click", () => gradeExercise(button.dataset.grade)));
  document.querySelectorAll("[data-reset]").forEach((button) => button.addEventListener("click", () => resetAnswer(button.dataset.reset)));
  document.querySelectorAll("[data-jump]").forEach((button) => button.addEventListener("click", () => {
    const card = document.querySelector(`[data-exercise="${button.dataset.jump}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("attention");
      setTimeout(() => card.classList.remove("attention"), 1600);
    }
  }));
  document.querySelector("#calculateFinal")?.addEventListener("click", calculateFinal);
}

function bindStaticEvents() {
  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const nav = document.querySelector(".site-nav");
    const open = nav.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".site-nav").classList.remove("open")));
  document.querySelector(".theme-toggle").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
  document.querySelector("#commitmentInput").value = state.commitment || "";
  document.querySelector("#commitmentDisplay").textContent = state.commitment || "写下一个小而明确的学习承诺。";
  document.querySelector("#commitmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.commitment = document.querySelector("#commitmentInput").value.trim();
    saveState();
    document.querySelector("#commitmentDisplay").textContent = state.commitment || "写下一个小而明确的学习承诺。";
    showToast("学习承诺已保存");
  });
  document.querySelectorAll(".copy-btn").forEach((button) => button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("Prompt 已复制");
    } catch {
      showToast("复制失败，请手动选择文本");
    }
  }));
  document.querySelector("#summaryButton").addEventListener("click", () => {
    document.querySelector("#summaryResult").textContent = makeSummary(document.querySelector("#summaryInput").value);
  });
  document.querySelector("#planButton").addEventListener("click", () => {
    document.querySelector("#planResult").textContent = makePlan(document.querySelector("#planTopic").value);
  });
  document.querySelector("#acronymSearch").addEventListener("input", (event) => renderAcronymReference(event.target.value));
  document.querySelector("#termSearch").addEventListener("input", (event) => renderGlossary(event.target.value));
  document.querySelector("#clearWrongBook").addEventListener("click", () => {
    state.wrongBook = {};
    saveState();
    renderWrongBook();
    updateProgress();
    showToast("错题本已清空");
  });
  const backToTop = document.querySelector("#backToTop");
  window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 520));
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function init() {
  renderCourse();
  renderFinalQuiz();
  renderAcronymReference();
  renderConceptMaps();
  renderGlossary();
  renderProjects("#starterProjects", starterProjects);
  renderProjects("#nextProjects", nextProjects);
  renderWrongBook();
  applyTheme(state.theme);
  bindStaticEvents();
  bindDynamicEvents();
  updateProgress();
}

init();
