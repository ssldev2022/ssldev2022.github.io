const portfolioPosts = [
  {
    "path": "projects/slack-integration/",
    "category": "Projects",
    "tag": "Brixcon",
    "title": "Brixcon — Slack으로 연결하는 업무 흐름",
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
      "title": "Brixcon — Connecting operations through Slack",
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
    }
  },
  {
    "path": "reflections/what-to-delegate-to-ai/",
    "category": "Learning",
    "tag": "AI",
    "contentLanguage": "ko",
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
    ]
  },
  {
    "path": "reflections/making-importance-understood/",
    "category": "Learning",
    "tag": "HCI",
    "contentLanguage": "ko",
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
      "title": "Making Ideas Concrete — And HCI"
    }
  }
];
