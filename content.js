const portfolioPosts = [
  {
    "path": "projects/brixcon-v2/",
    "category": "Projects",
    "tag": "Brixcon",
    "series": {
      "id": "brixcon",
      "part": 2
    },
    "title": "Brixcon Version 2 — Slack에서 웹 기반 운영 시스템으로",
    "excerpt": "현장 보고와 발주를 연결하던 Slack 기반 도구에서, 직원이 자신의 업무와 기록을 직접 확인하고 처리하는 웹 기반 운영 시스템으로 확장하고 있습니다.",
    "art": "http",
    "label": "BRIXCON / VERSION 2",
    "body": "Slack과 Google Workspace를 연결한 첫 번째 버전에 이어, 직원과 관리자가 역할에 맞는 업무를 처리하는 웹 기반 운영 시스템을 만들고 있습니다.",
    "sourceNote": "Brixcon 시리즈 2편입니다. Slack 기반 업무 도구에서 웹 기반 운영 시스템으로 확장하는 과정을 기록합니다.",
    "sections": [
      [
        "어떤 프로젝트인가요?",
        [
          "첫 번째 버전은 Brixcon의 반복 업무를 Slack과 Google Workspace로 연결하는 데서 시작했습니다. 현장 보고를 작성하고, 발주서를 만들고, 일정과 휴가 신청을 전달하는 흐름을 기존 도구 안에서 처리할 수 있도록 구성했습니다.",
          "Version 2에서는 이 업무들을 회사 전용 웹 화면으로 옮기고 있습니다. 직원이 로그인하면 자신의 역할에 맞는 기능과 자료를 확인하고, 신청부터 조회·수정까지 한곳에서 처리할 수 있도록 만드는 것이 목표입니다. Brixcon과 NVY가 같은 앱을 사용하되, 회사별 접근과 업무 자료는 구분합니다."
        ]
      ],
      [
        "왜 웹 시스템으로 확장했나요?",
        [
          "Slack은 대화를 나누면서 업무를 시작하기 좋은 도구였습니다. 하지만 관리해야 할 기록이 늘어나면서, 대화와 별도로 현재 상태를 정리해 보여주는 화면이 필요해졌습니다.",
          "직원에게는 자신의 급여와 휴가, 비용 정산을 확인하는 공간이 필요하고, 관리자에게는 여러 사람의 기록을 비교하고 조정하는 화면이 필요합니다. 누가 무엇을 볼 수 있는지, 어떤 항목을 직접 수정할 수 있는지도 업무마다 달랐습니다.",
          "그래서 Version 2에서는 기능을 추가하는 것과 함께, 사용자별로 필요한 정보와 할 수 있는 일을 정리하는 것에 집중했습니다."
        ]
      ],
      [
        "무엇을 할 수 있나요?",
        [
          "현재 웹 시스템에는 휴가 신청과 승인, 근무시간과 주간 급여 계산, 비용 정산과 영수증 첨부, 발주서 생성·수정 등이 연결되어 있습니다. 급여 자료는 서명란이 있는 인쇄용 양식으로도 출력할 수 있습니다.",
          "발주서는 번호를 발급하고 표지와 Invoice를 합쳐 PDF로 저장합니다. Brixcon은 현장별 발주를, NVY는 회사 공통 발주를 관리하도록 구분했습니다. 직원은 Settings에서 연락처와 비상연락처를 수정하고, 면허증이나 OSHA 카드 같은 문서를 등록할 수 있습니다.",
          "접근 권한은 관리자·사무직·직영팀으로 나눴습니다. 공통 업무 자료와 개인 자료를 구분하고, 다른 직원의 급여나 개인 정산 정보는 일반 직원에게 공개하지 않도록 구성했습니다."
        ]
      ],
      [
        "기존 시스템은 어떻게 이어가나요?",
        [
          "기존 App Hub의 자료를 출발점으로 삼고, 필요한 업무부터 웹 기능으로 연결하고 있습니다. 첨부파일과 업무 문서는 Google Drive를 계속 사용하면서, 앱에서는 기록과 파일의 관계를 관리합니다.",
          "현장 사진을 촬영 날짜에 따라 정리하는 자동화도 별도로 유지합니다. 사용자가 보는 웹 화면과 백그라운드 작업을 나누어, 화면을 열어두지 않아도 필요한 처리가 이어지도록 구성했습니다.",
          "주요 기술은 Next.js, React, TypeScript, Supabase의 PostgreSQL, Google Drive와 Google Cloud입니다. 기존 업무를 한 번에 모두 교체하기보다, 연결된 기능의 동작을 확인하면서 전환하고 있습니다."
        ]
      ],
      [
        "어떻게 만들고 있나요?",
        [
          "저는 실제 업무에서 필요한 기능과 규칙을 정리하고, Codex와 함께 구현과 수정을 진행하고 있습니다. 화면을 사용해 보면서 어색한 부분을 고치고, 저장된 결과와 접근 범위가 의도한 대로 동작하는지도 확인합니다.",
          "이번 버전에서는 작은 규칙들이 시스템 전체에 영향을 준다는 것을 더 자주 경험했습니다. 시급을 변경했을 때 과거 급여까지 바뀌면 안 되고, 저장 요청을 다시 보냈다고 발주서가 두 번 만들어져서도 안 됩니다. 같은 화면을 사용하더라도 직원마다 볼 수 있는 자료는 달라야 합니다.",
          "Version 2는 이런 실제 운영의 조건들을 하나씩 반영하는 과정입니다. 현재 일부 기능은 운영에 반영됐고, 나머지는 기존 시스템과 함께 사용하며 전환하고 있습니다. 앞으로도 직접 사용하면서 필요한 부분을 다듬어갈 예정입니다."
        ]
      ]
    ],
    "en": {
      "title": "Brixcon Version 2 — From Slack to a Web-Based Operations System",
      "excerpt": "Expanding from Slack-based tools for field reports and purchase orders into a web-based operations system where employees can view and manage their own work and records.",
      "body": "Building on the first version connecting Slack and Google Workspace, I’m developing a web-based operations system where employees and managers handle tasks according to their roles.",
      "sourceNote": "Part 2 of the Brixcon series, documenting the move from Slack-based tools to a web-based operations system.",
      "sections": [
        [
          "What is the project?",
          [
            "The first version began by connecting recurring work at Brixcon through Slack and Google Workspace. It brought field reports, purchase orders, schedules, and time-off requests into workflows within the tools the team already used.",
            "In Version 2, I’m moving these workflows into dedicated web interfaces for the company. The goal is for employees to log in, see the features and records relevant to their roles, and submit, review, and edit requests in one place. Brixcon and NVY share the same app, while access and business records remain separated by company."
          ]
        ],
        [
          "Why expand into a web system?",
          [
            "Slack was a useful place to start work alongside a conversation. As the number of records grew, however, we needed screens that showed the current state of work separately from those conversations.",
            "Employees need a place to check their own pay, time off, and expense reimbursements. Managers need screens for comparing and adjusting records across the team. Who can view which records, and which fields they can edit themselves, also varies by workflow.",
            "Alongside adding features, Version 2 focuses on clarifying what information each user needs and what actions they can take."
          ]
        ],
        [
          "What can it do?",
          [
            "The web system currently connects time-off requests and approvals, work hours and weekly pay calculations, expense reimbursements with receipt attachments, and purchase-order creation and editing. Payroll records can also be printed in a form with signature fields.",
            "Purchase orders receive a number, then combine a cover sheet and an invoice into a saved PDF. Brixcon manages orders by job site, while NVY manages company-wide orders. In Settings, employees can update their contact and emergency contact information and upload documents such as driver’s licenses or OSHA cards.",
            "Access is divided among administrators, office staff, and in-house crews. Shared business records are separated from personal records, and regular employees cannot view other employees’ pay or personal reimbursement information."
          ]
        ],
        [
          "How does it connect to the existing system?",
          [
            "I’m starting with records from the existing App Hub and connecting the workflows we need to web features. Attachments and business documents remain in Google Drive, while the app manages the relationships between records and files.",
            "The automation that organizes site photos by the date they were taken continues to run separately. By separating the web interface from background tasks, processing can continue without someone keeping a page open.",
            "The main technologies are Next.js, React, TypeScript, PostgreSQL on Supabase, Google Drive, and Google Cloud. Rather than replacing every existing workflow at once, I’m making the transition while checking how each connected feature behaves."
          ]
        ],
        [
          "How am I building it?",
          [
            "I define the features and rules needed in day-to-day work, then implement and revise them with Codex. I use the screens to find awkward interactions and check that saved results and access boundaries behave as intended.",
            "This version has given me more frequent reminders that small rules can affect the whole system. Changing an hourly rate must not change past pay. Resubmitting a save request must not create a duplicate purchase order. Even when employees use the same screen, the records they can see must depend on who they are.",
            "Version 2 is a process of incorporating these operational requirements one by one. Some features are already in use, while others are being introduced alongside the existing system. I plan to keep refining it through direct use."
          ]
        ]
      ]
    }
  },
  {
    "path": "projects/slack-integration/",
    "category": "Projects",
    "tag": "Brixcon",
    "title": "Brixcon Version 1 — Slack으로 연결하는 업무 흐름",
    "excerpt": "현장 보고부터 발주, 일정, 휴가 신청까지. Slack과 Google Workspace를 연결하는 내부 운영 시스템입니다.",
    "art": "slack",
    "label": "BRIXCON / OPERATIONS",
    "body": "Brixcon의 현장·사무 업무를 Slack과 Google Workspace로 연결하는 내부 운영 시스템입니다.",
    "sections": [
      [
        "어떤 프로젝트인가요?",
        "Brixcon의 현장·사무 업무를 Slack에서 처리하고, 관련 기록과 파일을 Google Sheets와 Drive로 연결하는 프로젝트입니다. 일일 보고, 발주서, 현장 일정, 휴가 신청처럼 반복해서 사용하는 업무 흐름을 다룹니다."
      ],
      [
        "무엇을 할 수 있나요?",
        "Slack에서 일일 보고를 작성·수정하고, 발주서를 관리하거나 현장 일정을 공유할 수 있도록 구성했습니다. 휴가 신청과 승인 흐름, 현장 사진을 날짜별로 정리하는 기능도 포함합니다. 기능마다 운영·검증 범위는 다르며, 모든 기능이 같은 수준으로 검증된 것은 아닙니다."
      ],
      [
        "어떻게 만들고 있나요?",
        "저는 필요한 업무와 사용 흐름을 정리하고, Codex가 제안한 방법을 검토하며 구현과 수정을 진행했습니다. 지금은 실제 코드와 동작을 대조하면서, 요청이 어떻게 전달되고 결과가 어디에 저장되는지 이해를 넓히고 있습니다."
      ]
    ],
    "en": {
      "title": "Brixcon Version 1 — Connecting Operations Through Slack",
      "excerpt": "From daily reports to purchase orders, schedules, and time off. An internal operations system connecting Slack and Google Workspace.",
      "body": "An internal system that connects Brixcon’s field and office workflows through Slack and Google Workspace.",
      "sections": [
        [
          "What is the project?",
          "This project brings Brixcon’s field and office workflows into Slack, connecting the associated records and files to Google Sheets and Drive. It covers recurring tasks such as daily reports, purchase orders, site schedules, and time-off requests."
        ],
        [
          "What does it do?",
          "The system supports creating and editing daily reports, managing purchase orders, and sharing site schedules in Slack. It also includes time-off requests and approvals, along with organizing site photos by date. Operational and validation coverage varies by feature; not every workflow has been verified to the same extent."
        ],
        [
          "How am I building it?",
          "I defined the workflows, reviewed approaches suggested by Codex, and worked through implementation and revisions with it. I’m now comparing the code with its actual behavior to better understand how requests travel through the system and where the results are stored."
        ]
      ]
    },
    "series": {
      "id": "brixcon",
      "part": 1
    }
  },
  {
    "path": "reflections/what-to-delegate-to-ai/",
    "category": "Learning",
    "tag": "AI",
    "title": "AI에게 맡길 일과, 내가 직접 해야 할 일",
    "excerpt": "결과물을 빨리 만드는 것과 내가 성장하는 것은 같은 일이 아니었다. AI와 함께 일하면서 그 사이의 기준을 찾고 있다.",
    "art": "notes",
    "label": "AI / LEARNING",
    "body": "AI로 할 수 있는 일이 많아질수록, 내가 직접 해야 할 일이 무엇인지 더 자주 생각하게 된다.",
    "sourceNote": "CS 545 Week 2의 Cocoa Reading Response와 AI를 활용해 개발한 경험을 바탕으로 쓴 글입니다.",
    "sections": [
      [
        "만드는 속도와 이해하는 속도",
        [
          "Brixcon의 업무 도구를 만들면서 나는 먼저 어떤 일이 불편한지 생각했다. 가능한 방법을 Codex에게 물어보고, 제안된 옵션 중 합리적으로 보이는 것을 골랐다. 구현하고, 써보고, 안 되는 부분을 다시 수정했다. 그렇게 실제로 작동하는 결과물이 만들어졌다.",
          "그런데 내가 그 결과물을 얼마나 이해하고 있는지는 다른 질문이었다. 어떤 기능이 필요한지는 설명할 수 있어도, 요청이 어떻게 전달되고 오류가 나면 어디부터 확인해야 하는지까지 설명할 수 있는 것은 아니었다. 결과물이 완성되는 속도와 내가 이해하는 속도가 꼭 같이 움직이지는 않았다."
        ]
      ],
      [
        "시행착오까지 모두 맡기면",
        [
          "Cocoa에 관한 논문을 읽다가 특히 공감한 것은, 읽고 이것저것 시도하는 과정 자체가 아이디어를 준다는 참여자의 말이었다. 보통 시행착오는 줄이고 싶은 비용처럼 느껴진다. 하지만 직접 해보는 동안에야 알게 되는 것도 있다. 무엇을 몰랐는지, 처음의 질문이 왜 부족했는지, 다른 방법이 왜 떠올랐는지 같은 것들이다.",
          "AI가 그 과정을 대신해 주면 빠르게 도착할 수는 있다. 다만 도착한 사람이 그 길을 다시 설명하거나, 조금 다른 문제에서도 길을 찾을 수 있는지는 별도로 확인해야 한다. 내가 계속 배우고 싶은 영역이라면 그 과정의 일부는 직접 남겨두어야겠다는 생각이 들었다."
        ]
      ],
      [
        "작업마다 다른 기준",
        [
          "그렇다고 AI를 덜 쓰는 것을 목표로 삼고 싶지는 않다. 실제 업무를 해결해야 할 때와 새로운 개념을 배우는 때는 목적부터 다르다. 빠르게 도구를 만들어 써보는 것이 필요한 순간도 있고, 느리더라도 내가 계산하고 코드를 읽어야 하는 순간도 있다.",
          "내가 찾고 싶은 기준은 단순히 “이 작업을 AI가 할 수 있나?”가 아니다. “이 작업을 맡기고 나면, 나는 무엇을 이해하고 있어야 하나?”에 가깝다. 모든 코드를 혼자 작성하지 않더라도, 내가 선택한 기능의 흐름과 결과를 확인하는 기준은 갖고 싶다."
        ]
      ],
      [
        "아직 기준을 만드는 중",
        [
          "지금은 이미 만든 프로젝트를 다시 읽는 데서 시작하려고 한다. Slack의 입력 하나가 어디로 가는지, 어떤 데이터가 남는지, 실패했을 때 무엇이 달라지는지. 작동하는 결과물을 출발점으로 삼아 내가 비워둔 이해를 채우는 것이다.",
          "AI를 잘 쓰는 능력에는 일을 맡기는 능력뿐 아니라, 어떤 부분을 내 경험으로 남길지 고르는 능력도 포함되는 것 같다. 아직 그 경계를 명확하게 정하지는 못했다. 다만 다음 결과물을 만들 때는, 결과물과 함께 나에게 무엇이 남는지도 보고 싶다."
        ]
      ]
    ],
    "en": {
      "title": "What to Delegate to AI, and What to Do Myself",
      "excerpt": "Building something quickly and growing as a developer turned out to be different things. Working with AI, I’m learning how to balance the two.",
      "body": "As AI helps me do more, I find myself thinking more often about what I still need to do myself.",
      "sourceNote": "Based on my CS 545 Week 2 reading response on Cocoa and my experience developing with AI.",
      "sections": [
        [
          "The pace of building and the pace of understanding",
          [
            "When building internal tools for Brixcon, I started by thinking about what made the work difficult. I asked Codex about possible approaches and chose the options that seemed reasonable. I implemented them, tried them out, and revised what did not work. That process produced tools that actually worked.",
            "How well I understood those tools was a separate question. I could explain which features were needed, but that did not necessarily mean I could explain how a request moved through the system or where to start looking when something failed. The pace of finishing a tool did not always match the pace of my understanding."
          ]
        ],
        [
          "When I delegate the trial and error too",
          [
            "While reading the paper on Cocoa, I particularly related to a participant’s observation that reading and trying things out can itself generate ideas. Trial and error often feels like a cost to reduce. Yet some things only become clear through doing: what I did not know, why my original question was incomplete, or how another approach came to mind.",
            "Letting AI do that work can get me to a result quickly. Whether I can then explain the path I took, or find my way through a slightly different problem, needs a separate check. In an area I want to keep learning, I think I need to leave some of that process for myself."
          ]
        ],
        [
          "Different criteria for different tasks",
          [
            "That does not mean I want to make using less AI a goal in itself. Solving a real work problem and learning a new concept start with different purposes. Sometimes I need to build a tool quickly and try it out. At other times, I need to do the calculations and read the code myself, even if that takes longer.",
            "The question I want to use as a guide goes beyond “Can AI do this task?” It is closer to “After I delegate this, what should I understand?” Even if I do not write every line of code myself, I want to understand how the features I choose work and have a basis for checking their results."
          ]
        ],
        [
          "Still working out my criteria",
          [
            "For now, I want to start by revisiting projects I have already built. Where does a single input from Slack go? What data is stored? What changes when something fails? I want to use a working tool as a starting point to fill the gaps in my understanding.",
            "Using AI well seems to involve both delegating work and choosing which parts to keep as my own experience. I have not clearly drawn that boundary yet. But the next time I build something, I want to look at what stays with me as well as what gets produced."
          ]
        ]
      ]
    }
  },
  {
    "path": "reflections/making-importance-understood/",
    "category": "Learning",
    "tag": "HCI",
    "title": "구체화, 그리고 HCI (Human-Computer Interaction)",
    "excerpt": "조직에서 느꼈던 막연한 중요함을, 다른 사람도 이해하고 함께 다룰 수 있는 문제로 바꾸는 일에 대해.",
    "art": "portfolio",
    "label": "HCI / PERSPECTIVE",
    "body": "무언가 중요하다고 느끼는 것과 그 중요성을 다른 사람에게 전달하는 것 사이에는 거리가 있었다.",
    "sourceNote": "CS 545 Week 1 Reading Response에 담았던 생각을 바탕으로 쓴 글입니다.",
    "sections": [
      [
        "느끼는 것과 전달하는 것",
        [
          "여러 그룹과 조직에서 지내면서, 눈에 잘 보이지 않는데도 전체에 큰 영향을 주는 요소들이 있다는 생각을 했다. 분명히 중요하다고 느끼는데, 막상 다른 사람에게 설명하려면 말이 쉽게 정리되지 않았다. 내가 느낀 중요함이 상대에게도 같은 무게로 전달되지는 않았다.",
          "그럴 때 필요한 것은 내 느낌을 더 강하게 주장하는 것만은 아닐 것이다. 어떤 상황을 보고 그렇게 느꼈는지, 누구에게 어떤 영향을 주는지, 함께 무엇을 바꿔볼 수 있는지까지 말할 수 있어야 한다. 나는 그 사이를 연결하는 일이 생각보다 어렵다고 느꼈다."
        ]
      ],
      [
        "HCI가 UI/UX보다 넓게 보이기 시작했다",
        [
          "수업 전에는 HCI(Human-Computer Interaction)를 주로 사용하기 편한 UI/UX를 만드는 분야로 생각했다. 그런데 첫 Reading Response에서 다룬 글은 무엇이 좋은 연구인지, 서로 다른 문제와 기여를 어떤 기준으로 이해할 수 있는지 묻고 있었다.",
          "그 질문이 내가 조직에서 느꼈던 어려움과 겹쳐 보였다. 한쪽에서는 당연히 중요한 일이 다른 쪽에서는 그렇지 않을 수 있다. 서로 다른 관점을 가진 사람들이 함께 판단하려면, 각자의 기여와 문제의식을 설명할 수 있는 공통의 언어가 필요하다는 생각이 들었다."
        ]
      ],
      [
        "공통의 기준이 있어도 질문은 남는다",
        [
          "동시에 “중요하다”는 판단은 누가 내리는지도 궁금했다. 같은 문제라도 각자의 위치와 경험에 따라 중요도가 달라질 수 있다. 숫자로 비교하기 어려운 문제도 있는데, 측정하기 편한 것만 기준으로 삼으면 무엇이 빠지게 될까.",
          "그래서 공통의 기준을 만드는 일과, 그 기준만으로 다 설명할 수 있다고 믿는 일은 구분하고 싶다. 기준은 서로의 생각을 이해하기 위한 출발점이 될 수 있다. 하지만 그 밖에 남는 경험과 맥락까지 사라지는 것은 아니다."
        ]
      ],
      [
        "내가 키우고 싶은 능력",
        [
          "이 수업을 통해 연습하고 싶은 것은 머릿속의 감각적인 생각을 설명 가능한 문제로 바꾸는 일이다. 개념을 정리해야 하는 문제인지, 설계를 바꿔야 하는지, 실제 구현으로 확인해야 하는지. 막연하게 중요하다고 느끼는 데서 한 걸음 더 나아가고 싶다.",
          "내가 꿈꾸는 Generalist도 이런 방향에 가깝다. 여러 분야를 안다고 말하는 것보다, 서로 다른 사람들이 보고 있는 문제를 연결하고 함께 다룰 수 있게 설명하는 사람. 아직은 그 능력을 키워가는 중이지만, 내 경험을 글로 정리하는 것도 그 연습의 일부가 될 것 같다."
        ]
      ]
    ],
    "en": {
      "title": "Making Ideas Concrete — And HCI",
      "excerpt": "On turning a vague sense that something matters within an organization into a problem other people can understand and work on together.",
      "body": "There was a gap between feeling that something mattered and communicating its importance to someone else.",
      "sourceNote": "Based on ideas from my CS 545 Week 1 reading response.",
      "sections": [
        [
          "Feeling something and communicating it",
          [
            "Across different groups and organizations, I noticed that some things could have a large effect on the whole without being easy to see. I felt sure they mattered, but putting that feeling into words for someone else was difficult. The importance I felt did not always come across with the same weight.",
            "In those moments, simply insisting more strongly on my feeling probably would not help. I needed to explain what I had observed, who was affected and how, and what we might change together. Connecting those pieces felt harder than I had expected."
          ]
        ],
        [
          "HCI began to look broader than UI/UX",
          [
            "Before this course, I mainly thought of HCI (Human-Computer Interaction) as a field concerned with making UI/UX easy to use. But the reading for my first response asked what makes good research and how we can understand different problems and contributions using shared criteria.",
            "Those questions overlapped with difficulties I had experienced in organizations. Something that obviously matters to one group may not seem as important to another. For people with different perspectives to make judgments together, I began to think they needed a common language for explaining their contributions and the problems they saw."
          ]
        ],
        [
          "Shared criteria still leave questions",
          [
            "At the same time, I wondered who gets to decide what is important. The same problem can carry different weight depending on someone’s position and experience. Some problems are also hard to compare numerically. If we rely only on what is easy to measure, what might we leave out?",
            "I want to distinguish between developing shared criteria and believing those criteria can explain everything. They can give us a starting point for understanding one another’s thinking. But the experiences and context that fall outside them do not disappear."
          ]
        ],
        [
          "The ability I want to develop",
          [
            "What I want to practice in this course is turning the impressions in my head into problems I can explain. Does a problem require clearer concepts, a change in design, or an implementation to test an idea? I want to take a step beyond a vague feeling that something matters.",
            "This is also close to the kind of generalist I hope to become: someone who connects the problems different people see and explains them in a way that lets people work on them together. I am still developing that ability, and writing about my experiences seems like one way to practice it."
          ]
        ]
      ]
    }
  }
];
