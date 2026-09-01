window.QUESTION_BANK = [
  {
    "id": 1,
    "topic": "Whole Numbers",
    "question": "On the 1st day of a school camp, there were 396 children. 27 boys left the camp on the 2nd day. If there were 2 times as many boys as girls who remained at the camp, how many boys were there on the 1st day of the camp?",
    "answer": "273 boys",
    "model": "bar-change",
    "hint": "1st find how many children remained. Split that total into 2 equal units for boys and 1 equal unit for girls, then restore the boys who left.",
    "questionZh": "在学校营地的第1天，有396名儿童。第2天，有27名男孩离开了营地。若留在营地的男孩人数是女孩人数的2倍，那么营地第1天有多少名男孩？",
    "hintZh": "第1步，求还剩多少名儿童。把该总数分成男孩的2个相等单位和女孩的1个相等单位，再把离开的男孩人数加回去。",
    "solution": {
      "en": {
        "strategy": "Find how many children remained after the boys left, use the 2:1 boys-to-girls ratio, then add the departing boys back.",
        "steps": [
          {
            "title": "Find the children remaining",
            "text": "396 − 27 = 369 children remained at the camp."
          },
          {
            "title": "Use the 2:1 ratio",
            "text": "The 369 remaining children made 2 + 1 = 3 equal parts. 369 ÷ 3 = 123, so the remaining boys numbered 2 × 123 = 246."
          },
          {
            "title": "Restore the boys who left",
            "text": "Add back the 27 boys who left: 246 + 27 = 273."
          }
        ],
        "answerCheck": "273 boys"
      },
      "zh-Hans": {
        "strategy": "先求离开男孩后剩下的儿童人数，按男孩和女孩的2:1人数比分配，再把离开的男孩加回去。",
        "steps": [
          {
            "title": "求剩下的儿童人数",
            "text": "396 − 27 = 369，营地里还剩369名儿童。"
          },
          {
            "title": "按2:1的人数比分配",
            "text": "男孩 : 女孩 = 2 : 1，共有2 + 1 = 3份。369 ÷ 3 = 123，所以留下的男孩有2 × 123 = 246名。"
          },
          {
            "title": "加回离开的男孩",
            "text": "246 + 27 = 273，因此第1天的男孩人数为273。"
          }
        ],
        "answerCheck": "答案：273名男孩。"
      }
    }
  },
  {
    "id": 2,
    "topic": "Whole Numbers",
    "question": "On Monday, Farmer Tom collected 3 times as many eggs as Farmer Jack. On Tuesday, Farmer Tom sold 160 eggs. Farmer Jack then had 2 times as many eggs as Farmer Tom. How many eggs did Farmer Jack have?",
    "answer": "64 eggs",
    "model": "bar-change",
    "hint": "Draw Tom as 3 units and Jack as 1 unit before the sale. After the sale, Jack is 2 units more than Tom; use the 160-egg difference.",
    "questionZh": "周一，Tom农夫收集的鸡蛋数是Jack农夫的3倍。周二，Tom农夫卖出了160个鸡蛋。此后，Jack农夫拥有的鸡蛋数是Tom农夫的2倍。Jack农夫有多少个鸡蛋？",
    "hintZh": "卖出前，将Tom表示为3个单位，将Jack表示为1个单位。卖出后，Jack比Tom多2个单位；利用160个鸡蛋的差额求解。",
    "solution": {
      "en": {
        "strategy": "Represent Farmer Jack's eggs by one amount and Farmer Tom's original eggs by three times that amount.",
        "steps": [
          {
            "title": "Set up the quantities",
            "text": "Let Farmer Jack have x eggs. Farmer Tom collected 3x eggs on Monday."
          },
          {
            "title": "Use the condition after the sale",
            "text": "After selling 160 eggs, Tom had 3x − 160 eggs. Jack then had 2 times Tom's amount, so x = 2(3x − 160)."
          },
          {
            "title": "Solve for Jack's eggs",
            "text": "x = 6x − 320, so 5x = 320 and x = 64."
          }
        ],
        "answerCheck": "64 eggs"
      },
      "zh-Hans": {
        "strategy": "把杰克农夫的鸡蛋数设为1个量，汤姆农夫原有的鸡蛋数就是这个量的3倍。",
        "steps": [
          {
            "title": "设出两人的鸡蛋数",
            "text": "设杰克农夫有x个鸡蛋，那么汤姆农夫周一收集了3x个鸡蛋。"
          },
          {
            "title": "利用卖出鸡蛋后的关系",
            "text": "汤姆卖出160个后有3x − 160个。此时杰克的鸡蛋数是汤姆的2倍，所以x = 2(3x − 160)。"
          },
          {
            "title": "解方程",
            "text": "x = 6x − 320，所以5x = 320，x = 64。"
          }
        ],
        "answerCheck": "答案：64个鸡蛋。"
      }
    }
  },
  {
    "id": 3,
    "topic": "Whole Numbers",
    "question": "When George is 15 years old, his sister is 8 years old and his father is 45 years old. How old will George's sister be when George is 1/2 his father's age?",
    "answer": "23 years old",
    "model": "bar-change",
    "hint": "The father is always 30 years older than George. Find George's age when he is 1/2 his father's age, then add the same number of years to his sister's age.",
    "questionZh": "当George 15岁时，他的妹妹8岁，父亲45岁。当George的年龄是父亲年龄的1/2时，他的妹妹将几岁？",
    "hintZh": "父亲始终比George大30岁。求出George的年龄等于父亲年龄的1/2时他几岁，再在妹妹的年龄上加上相同的年数。",
    "solution": {
      "en": {
        "strategy": "Use the constant age difference between George and his father, then add the elapsed years to his sister's age.",
        "steps": [
          {
            "title": "Find the father-son age difference",
            "text": "When George is 15 and his father is 45, the difference is 45 − 15 = 30 years."
          },
          {
            "title": "Find George's required age",
            "text": "When George is half his father's age, let George be g. His father is g + 30, so g = 1/2(g + 30). Thus 2g = g + 30 and g = 30."
          },
          {
            "title": "Advance the sister's age",
            "text": "George grows from 15 to 30, an increase of 15 years. His sister will be 8 + 15 = 23."
          }
        ],
        "answerCheck": "23 years old"
      },
      "zh-Hans": {
        "strategy": "先利用乔治和父亲之间不变的年龄差，求乔治达到条件时的年龄，再给妹妹增加相同的年数。",
        "steps": [
          {
            "title": "求父子年龄差",
            "text": "乔治15岁、父亲45岁，年龄差为45 − 15 = 30岁。"
          },
          {
            "title": "求乔治满足条件时的年龄",
            "text": "设乔治为g岁，父亲为g + 30岁。题意给出g = 1/2(g + 30)，所以2g = g + 30，g = 30。"
          },
          {
            "title": "计算妹妹的年龄",
            "text": "乔治从15岁到30岁经过15年，妹妹的年龄是8 + 15 = 23岁。"
          }
        ],
        "answerCheck": "答案：23岁。"
      }
    }
  },
  {
    "id": 4,
    "topic": "Whole Numbers",
    "question": "Linda and Serene had an equal number of balloons. After Linda used 16 balloons, Serene had 3 times as many balloons as Linda. How many balloons did Serene have?",
    "answer": "24 balloons",
    "model": "bar-change",
    "hint": "After Linda uses balloons, Serene's unchanged amount is 3 equal units while Linda has 1. The 2-unit difference is 16.",
    "questionZh": "Linda和Serene原有同样多的气球。Linda用了16个气球后，Serene的气球数是Linda的3倍。Serene有多少个气球？",
    "hintZh": "Linda用掉气球后，Serene未变的数量是3个相等单位，而Linda是1个单位。2个单位的差额是16。",
    "solution": {
      "en": {
        "strategy": "Let the equal original number of balloons be one variable and compare Serene's unchanged amount with Linda's amount after using 16 balloons.",
        "steps": [
          {
            "title": "Represent the original equal amounts",
            "text": "Let each girl originally have b balloons. Serene still has b, while Linda has b − 16."
          },
          {
            "title": "Use the three-times condition",
            "text": "Serene has 3 times Linda's remaining balloons, so b = 3(b − 16)."
          },
          {
            "title": "Solve for Serene's amount",
            "text": "b = 3b − 48, so 2b = 48 and b = 24."
          }
        ],
        "answerCheck": "24 balloons"
      },
      "zh-Hans": {
        "strategy": "把两人原来相同的气球数设为一个未知量，比较瑟琳娜不变的数量和琳达用掉16个后的数量。",
        "steps": [
          {
            "title": "表示原来的相同数量",
            "text": "设两人原来各有b个气球。瑟琳娜仍有b个，琳达有b − 16个。"
          },
          {
            "title": "利用3倍关系",
            "text": "瑟琳娜的气球数是琳达剩余数量的3倍，所以b = 3(b − 16)。"
          },
          {
            "title": "解出瑟琳娜的气球数",
            "text": "b = 3b − 48，所以2b = 48，b = 24。"
          }
        ],
        "answerCheck": "答案：24个气球。"
      }
    }
  },
  {
    "id": 5,
    "topic": "Whole Numbers",
    "question": "Jennifer had a party. She wanted to give an equal number of balloons to her 6 friends. If 1 of her friends did not turn up for the party, the rest would be able to receive another 2 balloons each. How many balloons did Jennifer have?",
    "answer": "60 balloons",
    "model": "unit-bar",
    "hint": "With 1 friend absent, 5 friends each receive 2 more balloons. That extra distribution accounts for 10 balloons; use it to find each original share.",
    "questionZh": "Jennifer举办了一场派对。她想把气球平均分给她的6位朋友。如果其中1位朋友没有来参加派对，其余的人每人就能多得到2个气球。Jennifer有多少个气球？",
    "hintZh": "有1位朋友缺席时，5位朋友每人多分到2个气球。这部分额外分配的气球共计10个；利用它求出最初每人应得的数量。",
    "solution": {
      "en": {
        "strategy": "Compare the total balloons when 6 friends attend with the total when only 5 friends attend and each gets 2 more.",
        "steps": [
          {
            "title": "Represent the original share",
            "text": "Let each of the 6 friends receive x balloons when all attend. Jennifer then has 6x balloons."
          },
          {
            "title": "Use the absent-friend situation",
            "text": "With 1 friend absent, 5 friends each receive x + 2 balloons, so the same total is 5(x + 2)."
          },
          {
            "title": "Solve for the total",
            "text": "6x = 5(x + 2), so x = 10. Therefore Jennifer had 6 × 10 = 60 balloons."
          }
        ],
        "answerCheck": "60 balloons"
      },
      "zh-Hans": {
        "strategy": "比较6位朋友都到场时的气球总数和只有5位朋友到场、每人多得2个时的气球总数。",
        "steps": [
          {
            "title": "设原来的每人份数",
            "text": "设6位朋友都到场时每人分得x个气球，珍妮弗共有6x个气球。"
          },
          {
            "title": "利用1位朋友缺席的情况",
            "text": "1位朋友没来时，5位朋友每人分得x + 2个，所以总数是5(x + 2)。"
          },
          {
            "title": "求气球总数",
            "text": "6x = 5(x + 2)，所以x = 10。珍妮弗共有6 × 10 = 60个气球。"
          }
        ],
        "answerCheck": "答案：60个气球。"
      }
    }
  },
  {
    "id": 6,
    "topic": "Whole Numbers",
    "question": "Anna had 3 times as many beads as Zoe. They had 480 beads altogether. Mrs Taylor gave an equal number of beads to each of them. Zoe then had 1/2 the number of beads that Anna had. How many beads did Mrs Taylor give them?",
    "answer": "240 beads",
    "model": "bar-change",
    "hint": "At 1st, Anna and Zoe are 3 units and 1 unit. Equal additions do not change their difference; after the gifts, Anna is 2 units more than Zoe.",
    "questionZh": "Anna的珠子数是Zoe的3倍。她们一共有480颗珠子。Taylor太太给她们每人同样多的珠子。此后，Zoe的珠子数是Anna的1/2。Taylor太太给了她们每人多少颗珠子？",
    "hintZh": "第1步，Anna和Zoe分别为3个单位和1个单位。增加相同数量不会改变她们的差额；收到珠子后，Anna比Zoe多2个单位。",
    "solution": {
      "en": {
        "strategy": "First find Anna's and Zoe's original bead counts from the 3:1 ratio, then use the final one-half relationship after equal gifts.",
        "steps": [
          {
            "title": "Find the original bead counts",
            "text": "Anna : Zoe = 3 : 1, or 4 parts altogether. 480 ÷ 4 = 120, so Anna had 360 beads and Zoe had 120 beads."
          },
          {
            "title": "Represent the equal gifts",
            "text": "Let Mrs Taylor give each girl t beads. The new counts are 360 + t and 120 + t."
          },
          {
            "title": "Apply the final half relationship",
            "text": "Zoe then has 1/2 of Anna's amount: 120 + t = 1/2(360 + t). Thus 240 + 2t = 360 + t, so t = 120. She gave 2 × 120 = 240 beads altogether."
          }
        ],
        "answerCheck": "240 beads"
      },
      "zh-Hans": {
        "strategy": "先用3:1的比求安娜和佐伊原有的珠子数，再利用两人得到相同数量珠子后的1/2关系。",
        "steps": [
          {
            "title": "求原来的珠子数",
            "text": "安娜 : 佐伊 = 3 : 1，共4份。480 ÷ 4 = 120，所以安娜有360颗，佐伊有120颗。"
          },
          {
            "title": "设每人得到的珠子数",
            "text": "设泰勒太太给每人t颗珠子，得到后的数量分别为360 + t和120 + t。"
          },
          {
            "title": "利用最后的1/2关系",
            "text": "佐伊的数量是安娜的1/2：120 + t = 1/2(360 + t)。所以240 + 2t = 360 + t，t = 120。总共给了2 × 120 = 240颗。"
          }
        ],
        "answerCheck": "答案：240颗珠子。"
      }
    }
  },
  {
    "id": 7,
    "topic": "Whole Numbers",
    "question": "Helen had to arrange some chairs in a fixed number of rows. She estimated that there were more than 30 but fewer than 70 chairs. If she put 8 chairs in 1 row, she would be 7 chairs short. If she put 7 chairs in 1 row, she would have 2 chairs left. How many chairs were there?",
    "answer": "65 chairs",
    "model": "guess-check",
    "hint": "Look for a number between 31 and 69 that is 2 more than a multiple of 7 and 7 less than a multiple of 8.",
    "questionZh": "Helen要把一些椅子排成固定行数。她估计椅子超过30把但少于70把。如果每1行放8把椅子，她就会差7把；如果每1行放7把椅子，就会剩2把。共有多少把椅子？",
    "hintZh": "寻找31到69之间的一个数：它比7的倍数多2，并且比8的倍数少7。",
    "solution": {
      "en": {
        "strategy": "Find a number from 31 to 69 that leaves 2 when arranged in rows of 7 and becomes exactly divisible by 8 after adding the 7 chairs she lacks.",
        "steps": [
          {
            "title": "Translate the 7-chair row condition",
            "text": "Having 2 chairs left in rows of 7 means the total has the form 7n + 2."
          },
          {
            "title": "List possible totals in the range",
            "text": "Between 31 and 69, the possible totals are 37, 44, 51, 58, and 65."
          },
          {
            "title": "Test the 8-chair row condition",
            "text": "She is 7 chairs short for rows of 8, so total + 7 must be divisible by 8. Only 65 + 7 = 72 = 9 × 8."
          }
        ],
        "answerCheck": "65 chairs"
      },
      "zh-Hans": {
        "strategy": "在31到69之间寻找一个数：按每排7把椅子排列时余2把，加上缺少的7把后又能被8整除。",
        "steps": [
          {
            "title": "表示每排7把时的条件",
            "text": "每排7把椅子后余2把，说明总数可写成7n + 2。"
          },
          {
            "title": "列出范围内的可能数",
            "text": "31到69之间可能的总数是37、44、51、58和65。"
          },
          {
            "title": "检验每排8把时的条件",
            "text": "还差7把才够按每排8把排列，所以总数 + 7必须能被8整除。只有65 + 7 = 72 = 9 × 8。"
          }
        ],
        "answerCheck": "答案：65把椅子。"
      }
    }
  },
  {
    "id": 8,
    "topic": "Whole Numbers",
    "question": "Zack and Mandy shared 120 sweets. After Zack gave Mandy 10 sweets, he had 2 times as many sweets as Mandy. How many sweets did each of them have at 1st?",
    "answer": "Mandy: 30 sweets; Zack: 90 sweets",
    "model": "bar-change",
    "hint": "After the transfer, Zack and Mandy are in a 2:1 ratio. Use the total of 120 to find their after-transfer amounts, then reverse the 10-sweet transfer.",
    "questionZh": "Zack和Mandy分120颗糖果。Zack给Mandy 10颗糖果后，他的糖果数是Mandy的2倍。他们一开始（第1次分配前）各有多少颗糖果？",
    "hintZh": "转移后，Zack和Mandy的糖果数之比为2:1。利用总数120求出转移后各自的数量，再还原这次10颗糖果的转移。",
    "solution": {
      "en": {
        "strategy": "Use the 2:1 ratio after Zack gives Mandy 10 sweets, then reverse that transfer to get the initial amounts.",
        "steps": [
          {
            "title": "Find the amounts after the transfer",
            "text": "After the transfer, Zack : Mandy = 2 : 1 and their total is still 120. One part is 120 ÷ 3 = 40, so Zack has 80 and Mandy has 40."
          },
          {
            "title": "Reverse Zack's transfer",
            "text": "Before giving 10 sweets, Zack had 80 + 10 = 90 sweets and Mandy had 40 − 10 = 30 sweets."
          },
          {
            "title": "Check the total",
            "text": "90 + 30 = 120, so the initial amounts use all 120 sweets."
          }
        ],
        "answerCheck": "Mandy: 30 sweets; Zack: 90 sweets"
      },
      "zh-Hans": {
        "strategy": "先用扎克给曼迪10颗糖后形成的2:1比求当时的数量，再倒推转移前的数量。",
        "steps": [
          {
            "title": "求转移后的数量",
            "text": "转移后扎克 : 曼迪 = 2 : 1，总数仍为120。每1份是120 ÷ 3 = 40，所以扎克有80颗，曼迪有40颗。"
          },
          {
            "title": "倒推转移前的数量",
            "text": "转移前扎克有80 + 10 = 90颗糖，曼迪有40 − 10 = 30颗糖。"
          },
          {
            "title": "核对总数",
            "text": "90 + 30 = 120，正好是原来的糖果总数。"
          }
        ],
        "answerCheck": "答案：曼迪30颗糖；扎克90颗糖。"
      }
    }
  },
  {
    "id": 9,
    "topic": "Whole Numbers",
    "question": "A basket contained 4 times as many blue balls as red balls. After 21 blue balls were taken away, there were 2 times as many red balls as blue balls. How many balls were there in the basket at 1st?",
    "answer": "30 balls",
    "model": "bar-change",
    "hint": "Draw the blue balls as 8 units and the red balls as 2 units, so that after the removal the new blue amount is exactly 1 unit. The 21 balls taken away are then 7 units.",
    "questionZh": "一个篮子里蓝球的数量是红球的4倍。取走21个蓝球后，红球数量是蓝球数量的2倍。篮子最初（第1次取走前）共有多少个球？",
    "hintZh": "把蓝球表示为8份，红球表示为2份，使取走后新的蓝球数正好是1份。取走的21个球就是7份。",
    "solution": {
      "en": {
        "strategy": "Represent the original red-ball count by one amount and use the fact that, after 21 blue balls are removed, red balls are twice the remaining blue balls.",
        "steps": [
          {
            "title": "Represent the original balls",
            "text": "Let the original number of red balls be r. Then the original number of blue balls is 4r."
          },
          {
            "title": "Use the condition after removal",
            "text": "After 21 blue balls are removed, 4r − 21 blue balls remain. There are then 2 times as many red balls as blue balls, so r = 2(4r − 21)."
          },
          {
            "title": "Find the original total",
            "text": "r = 8r − 42, so 7r = 42 and r = 6. The blue balls were 4 × 6 = 24, giving 6 + 24 = 30 balls."
          }
        ],
        "answerCheck": "30 balls"
      },
      "zh-Hans": {
        "strategy": "把原来红球的数量设为一个未知量，再利用拿走21个蓝球后红球数量是剩余蓝球数量的2倍。",
        "steps": [
          {
            "title": "表示原来的球数",
            "text": "设原来有r个红球，那么原来有4r个蓝球。"
          },
          {
            "title": "利用拿走后的关系",
            "text": "拿走21个蓝球后，剩下4r − 21个蓝球。此时红球数是蓝球数的2倍，所以r = 2(4r − 21)。"
          },
          {
            "title": "求原来的总数",
            "text": "r = 8r − 42，所以7r = 42，r = 6。蓝球有4 × 6 = 24个，总数为6 + 24 = 30个。"
          }
        ],
        "answerCheck": "答案：30个球。"
      }
    }
  },
  {
    "id": 10,
    "topic": "Fractions",
    "question": "Nancy had 1/3 as much money as Ben. Lucy had $20 more than Ben. They had $132 altogether. How much did each of them have?",
    "answer": "Nancy: $16; Ben: $48; Lucy: $68",
    "model": "money-units",
    "hint": "Let Nancy be 1 unit and Ben be 3 units. Remove Lucy's extra $20 from the total before dividing the remaining 7 units.",
    "questionZh": "Nancy的钱是Ben的1/3。Lucy的钱比Ben多$20。他们一共有$132。每个人各有多少钱？",
    "hintZh": "设Nancy为1个单位，Ben为3个单位。先从总数中减去Lucy多出的$20，再把剩余部分按7个单位分配。",
    "solution": {
      "en": {
        "strategy": "Use units for Nancy and Ben, remove Lucy's extra $20, and then divide the remaining total into equal units.",
        "steps": [
          {
            "title": "Set up the unit ratio",
            "text": "Let Nancy have 1 unit. Ben has 3 units because Nancy has 1/3 as much as Ben, and Lucy has 3 units plus $20."
          },
          {
            "title": "Remove Lucy's extra money",
            "text": "The three people have 1 + 3 + 3 = 7 units plus $20. Remove the extra $20: $132 − $20 = $112."
          },
          {
            "title": "Find each amount",
            "text": "$112 ÷ 7 = $16 per unit. Nancy has $16, Ben has 3 × $16 = $48, and Lucy has $48 + $20 = $68."
          }
        ],
        "answerCheck": "Nancy: $16; Ben: $48; Lucy: $68"
      },
      "zh-Hans": {
        "strategy": "把南希和本的金额表示为相等的份数，先扣除露西多出的$20，再把其余总数按份数分配。",
        "steps": [
          {
            "title": "设出份数关系",
            "text": "设南希有1份。本有3份，因为南希的钱是本的1/3；露西有3份再多$20。"
          },
          {
            "title": "先扣除露西多出的金额",
            "text": "3人的钱共有1 + 3 + 3 = 7份，另加$20。$132 − $20 = $112。"
          },
          {
            "title": "求各人的金额",
            "text": "$112 ÷ 7 = $16，每份是$16。南希有$16，本有3 × $16 = $48，露西有$48 + $20 = $68。"
          }
        ],
        "answerCheck": "答案：南希$16；本$48；露西$68。"
      }
    }
  },
  {
    "id": 11,
    "topic": "Fractions",
    "question": "There were 3 parcels, A, B and C. The mass of Parcel B was 3/4 kg less than the mass of Parcel A. The mass of Parcel C was 2/3 kg more than the mass of Parcel B. If the mass of Parcel A was 4 1/2 kg, what was the mass of Parcel C?",
    "answer": "4 5/12 kg",
    "model": "mass-bar",
    "hint": "Parcel A is 4 1/2 kg. Subtract 3/4 kg to find Parcel B, then add 2/3 kg to find Parcel C. Change to a common denominator before adding or subtracting.",
    "questionZh": "有3个包裹，A、B和C。包裹B的质量比包裹A少3/4 kg。包裹C的质量比包裹B多2/3 kg。若包裹A的质量是4 1/2 kg，包裹C的质量是多少？",
    "hintZh": "从4 1/2 kg中减去3/4 kg，求出包裹B的质量，再加上2/3 kg。分数相加或相减时，使用公分母。",
    "solution": {
      "en": {
        "strategy": "Subtract the stated fraction from Parcel A to obtain Parcel B, then add the stated fraction to obtain Parcel C.",
        "steps": [
          {
            "title": "Find Parcel B's mass",
            "text": "Parcel A is 4 1/2 kg. Parcel B is 3/4 kg lighter, so B = 4 1/2 − 3/4 = 4 2/4 − 3/4 = 3 3/4 kg."
          },
          {
            "title": "Add to find Parcel C's mass",
            "text": "Parcel C is 2/3 kg heavier than B: 3 3/4 + 2/3 = 3 9/12 + 8/12 = 4 5/12 kg."
          },
          {
            "title": "Check the stated differences",
            "text": "4 5/12 − 3 3/4 = 2/3 kg, so Parcel C is the required 2/3 kg heavier than B."
          }
        ],
        "answerCheck": "4 5/12 kg"
      },
      "zh-Hans": {
        "strategy": "先从A包裹的质量中减去给出的分数求B包裹，再加上给出的分数求C包裹。",
        "steps": [
          {
            "title": "求B包裹的质量",
            "text": "A包裹重4 1/2 kg。B包裹轻3/4 kg，所以B = 4 1/2 − 3/4 = 4 2/4 − 3/4 = 3 3/4 kg。"
          },
          {
            "title": "加上质量差求C包裹",
            "text": "C包裹比B包裹重2/3 kg：3 3/4 + 2/3 = 3 9/12 + 8/12 = 4 5/12 kg。"
          },
          {
            "title": "核对质量差",
            "text": "4 5/12 − 3 3/4 = 2/3 kg，C包裹确实比B包裹重2/3 kg。"
          }
        ],
        "answerCheck": "答案：4 5/12 kg。"
      }
    }
  },
  {
    "id": 12,
    "topic": "Fractions",
    "question": "Mr Rice spent 1/5 of his salary on food and 2/3 on clothing. 1/2 of the remaining amount was given to his wife and he saved the rest. If he had saved $520, what was Mr Rice's salary?",
    "answer": "$7800",
    "model": "fraction-of-remainder",
    "hint": "Express 1/5 and 2/3 in fifteenths. After food and clothing, split the remaining fraction equally between his wife and his savings.",
    "questionZh": "Rice先生把工资的1/5花在食物上，把2/3花在衣物上。剩余金额的1/2给了妻子，其余存起来。如果他存了$520，Rice先生的工资是多少？",
    "hintZh": "将1/5和2/3化为以15为分母的分数。扣除食物和衣物的开支后，把剩余的分数在妻子和储蓄之间平均分配。",
    "solution": {
      "en": {
        "strategy": "Find the fraction left after food and clothing, then use the fact that savings are half of that remainder.",
        "steps": [
          {
            "title": "Find the remaining fraction",
            "text": "Food and clothing used 1/5 + 2/3 = 3/15 + 10/15 = 13/15 of the salary. The remaining fraction was 1 − 13/15 = 2/15."
          },
          {
            "title": "Find the savings fraction",
            "text": "Mr Rice gave 1/2 of the remaining 2/15 to his wife and saved the other 1/2. His savings were 1/2 × 2/15 = 1/15 of his salary."
          },
          {
            "title": "Calculate the salary",
            "text": "If 1/15 is $520, the full salary is 15 × $520 = $7800."
          }
        ],
        "answerCheck": "$7800"
      },
      "zh-Hans": {
        "strategy": "先求食物和衣服支出后剩下的薪水分数，再利用储蓄是这部分的一半。",
        "steps": [
          {
            "title": "求剩余的薪水分数",
            "text": "食物和衣服用了1/5 + 2/3 = 3/15 + 10/15 = 13/15，剩下1 − 13/15 = 2/15。"
          },
          {
            "title": "求储蓄所占分数",
            "text": "赖斯先生把剩余2/15的一半给妻子，另一半储蓄。因此储蓄是1/2 × 2/15 = 1/15的薪水。"
          },
          {
            "title": "计算薪水",
            "text": "1/15是$520，所以全部薪水是15 × $520 = $7800。"
          }
        ],
        "answerCheck": "答案：$7800。"
      }
    }
  },
  {
    "id": 13,
    "topic": "Fractions",
    "question": "Sam had some marbles. He gave 1/7 of them to his brother. 2/3 of the remaining marbles were given to his cousin. The rest were kept in a box. If 48 marbles were kept in the box, how many more marbles did Sam give to his cousin than to his brother?",
    "answer": "72 marbles",
    "model": "fraction-of-remainder",
    "hint": "After giving 1/7 away, the remaining 6/7 is split into 2/3 for the cousin and 1/3 kept. Work backwards from the 48 kept marbles.",
    "questionZh": "Sam有一些弹珠。他把其中的1/7给了弟弟。剩余弹珠的2/3给了表亲，其余放在一个盒子里。如果盒子里有48颗弹珠，Sam给表亲的弹珠比给弟弟的多多少颗？",
    "hintZh": "给出1/7后，剩余的6/7分为给表亲的2/3和保留的1/3。从盒中保留的48颗弹珠倒推。",
    "solution": {
      "en": {
        "strategy": "Work backward from the 48 marbles kept, which are one-third of the marbles remaining after Sam gave one-seventh to his brother.",
        "steps": [
          {
            "title": "Find the marbles remaining after the first gift",
            "text": "After giving 1/7 to his brother, Sam has 6/7 left. The 48 marbles kept are 1/3 of this remainder because 2/3 went to his cousin. Thus the remainder is 48 × 3 = 144."
          },
          {
            "title": "Find the original number and each gift",
            "text": "If 6/7 of the original number is 144, the original number is 144 ÷ 6 × 7 = 168. His brother received 1/7 × 168 = 24 marbles."
          },
          {
            "title": "Compare the cousin's and brother's gifts",
            "text": "His cousin received 2/3 × 144 = 96 marbles. The difference is 96 − 24 = 72 marbles."
          }
        ],
        "answerCheck": "72 marbles"
      },
      "zh-Hans": {
        "strategy": "从盒中留下的48颗弹珠倒推；这48颗是山姆送给弟弟后剩余弹珠的1/3。",
        "steps": [
          {
            "title": "求送给弟弟后剩下的弹珠数",
            "text": "送给弟弟1/7后，剩下6/7。剩下的弹珠中2/3送给表兄弟，盒中留下1/3，所以送弟弟后剩下48 × 3 = 144颗。"
          },
          {
            "title": "求原有数量和送给弟弟的数量",
            "text": "原数的6/7是144，所以原数为144 ÷ 6 × 7 = 168。弟弟得到1/7 × 168 = 24颗。"
          },
          {
            "title": "比较两次赠送的数量",
            "text": "表兄弟得到2/3 × 144 = 96颗。96 − 24 = 72颗。"
          }
        ],
        "answerCheck": "答案：72颗弹珠。"
      }
    }
  },
  {
    "id": 14,
    "topic": "Fractions",
    "question": "Mrs Anderson bought 60 eggs. She used 2/5 of them to bake cakes. She used some eggs to bake cookies. She had 12 eggs left. How many eggs did she use for baking cookies?",
    "answer": "24 eggs",
    "model": "fraction-of-remainder",
    "hint": "Find 2/5 of 60 for the cakes, then subtract both the cake eggs and the eggs left from 60.",
    "questionZh": "Anderson太太买了60个鸡蛋。她用其中的2/5烤蛋糕，又用一些鸡蛋烤饼干。她还剩12个鸡蛋。她烤饼干用了多少个鸡蛋？",
    "hintZh": "先求出60的2/5用于烤蛋糕，再从60中减去烤蛋糕用的鸡蛋和剩下的鸡蛋。",
    "solution": {
      "en": {
        "strategy": "Find the eggs used for cakes first, then subtract the cake eggs and the eggs left from the original 60.",
        "steps": [
          {
            "title": "Calculate the cake eggs",
            "text": "Mrs Anderson used 2/5 of 60 eggs for cakes: 2/5 × 60 = 24 eggs."
          },
          {
            "title": "Account for the eggs left",
            "text": "After all baking, 12 eggs were left. The cake eggs, cookie eggs, and leftover eggs total 60."
          },
          {
            "title": "Find the cookie eggs",
            "text": "60 − 24 − 12 = 24 eggs were used for baking cookies."
          }
        ],
        "answerCheck": "24 eggs"
      },
      "zh-Hans": {
        "strategy": "先求做蛋糕用掉的鸡蛋数，再从原来的60个中减去做蛋糕的鸡蛋和剩下的鸡蛋。",
        "steps": [
          {
            "title": "计算做蛋糕用的鸡蛋",
            "text": "安德森太太用60个鸡蛋的2/5做蛋糕：2/5 × 60 = 24个。"
          },
          {
            "title": "列出剩余鸡蛋的关系",
            "text": "完成所有烘焙后还剩12个鸡蛋。做蛋糕、做饼干和剩下的鸡蛋共60个。"
          },
          {
            "title": "求做饼干用的鸡蛋",
            "text": "60 − 24 − 12 = 24，所以做饼干用了24个鸡蛋。"
          }
        ],
        "answerCheck": "答案：24个鸡蛋。"
      }
    }
  },
  {
    "id": 15,
    "topic": "Fractions",
    "question": "2/7 of the members in a country club are men. There are 1050 women below 50 years old. If there are 960 more women than men in the country club, how many women are above 50 years old?",
    "answer": "550 women",
    "model": "unit-bar",
    "hint": "If men are 2/7 of the club, women are 5/7. The difference between women and men is 3 equal units, which is 960.",
    "questionZh": "某乡村俱乐部成员中，2/7是男性。有1050名50岁以下的女性。如果该俱乐部中女性比男性多960人，那么50岁以上的女性有多少人？",
    "hintZh": "如果男性占俱乐部成员的2/7，那么女性占5/7。女性与男性的差是3个相等单位，即960人。",
    "solution": {
      "en": {
        "strategy": "Use the 2/7 men and 5/7 women fractions so that the 960-person difference represents 3 equal parts, then subtract the younger women.",
        "steps": [
          {
            "title": "Find one equal part",
            "text": "Women make up 5/7 and men make up 2/7, so the difference is 5/7 − 2/7 = 3/7. Those 3 parts equal 960, so 1 part is 960 ÷ 3 = 320."
          },
          {
            "title": "Find the total number of women",
            "text": "Women make up 5 parts, so there are 5 × 320 = 1600 women in the club."
          },
          {
            "title": "Subtract women below 50",
            "text": "1600 − 1050 = 550 women are above 50 years old."
          }
        ],
        "answerCheck": "550 women"
      },
      "zh-Hans": {
        "strategy": "利用男性占2/7、女性占5/7，令960人的差额对应3个相等份，再减去50岁以下的女性人数。",
        "steps": [
          {
            "title": "求每一份的人数",
            "text": "女性占5/7，男性占2/7，差额为5/7 − 2/7 = 3/7。这3份是960人，所以1份为960 ÷ 3 = 320人。"
          },
          {
            "title": "求女性总人数",
            "text": "女性占5份，所以女性总数为5 × 320 = 1600人。"
          },
          {
            "title": "减去50岁以下的女性",
            "text": "1600 − 1050 = 550，因此50岁以上的女性有550人。"
          }
        ],
        "answerCheck": "答案：550名女性。"
      }
    }
  },
  {
    "id": 16,
    "topic": "Fractions",
    "question": "Stephanie had a total of 80 pieces of $2 and $10 notes. After spending 2/5 of her $2 notes and 8 pieces of her $10 notes, she had an equal number of $2 and $10 notes left. How much money did Stephanie have at 1st?",
    "answer": "$440",
    "model": "money-units",
    "hint": "The 2 kinds of notes left are equal. Since 8 $10 notes were spent, use the total note count to find each original count before calculating the money.",
    "questionZh": "Stephanie共有80张$2和$10钞票。她花掉$2钞票的2/5以及8张$10钞票后，剩下的$2和$10钞票数量相同。Stephanie最初（第1次消费前）有多少钱？",
    "hintZh": "剩下的2种纸币数量相同。既然她花掉了8张$10纸币，利用纸币总张数求出每种纸币最初的张数，再计算金额。",
    "solution": {
      "en": {
        "strategy": "Let the original counts of $2 and $10 notes be variables, use the equal counts left after spending, and then calculate the original value.",
        "steps": [
          {
            "title": "Set up the note counts",
            "text": "Let x be the original number of $2 notes and y be the original number of $10 notes. Since there are 80 notes, x + y = 80."
          },
          {
            "title": "Use the equal remaining counts",
            "text": "After spending 2/5 of the $2 notes, 3/5x remain. After spending 8 $10 notes, y − 8 remain. These are equal, so 3/5x = y − 8."
          },
          {
            "title": "Solve and calculate the value",
            "text": "Substitute y = 80 − x: 3/5x = 72 − x. Thus 8/5x = 72, x = 45 and y = 35. The original money was 45 × $2 + 35 × $10 = $440."
          }
        ],
        "answerCheck": "$440"
      },
      "zh-Hans": {
        "strategy": "把原有的$2和$10纸币张数设为未知数，利用花掉部分纸币后两种纸币剩余张数相等的条件，再计算原有金额。",
        "steps": [
          {
            "title": "设出两种纸币的张数",
            "text": "设原有$2纸币为x张，$10纸币为y张。共有80张，所以x + y = 80。"
          },
          {
            "title": "利用剩余张数相等",
            "text": "花掉$2纸币的2/5后，剩下3/5x张；花掉8张$10纸币后，剩下y − 8张。两者相等，所以3/5x = y − 8。"
          },
          {
            "title": "解出张数并求金额",
            "text": "代入y = 80 − x：3/5x = 72 − x。因此8/5x = 72，x = 45，y = 35。原有金额为45 × $2 + 35 × $10 = $440。"
          }
        ],
        "answerCheck": "答案：$440。"
      }
    }
  },
  {
    "id": 17,
    "topic": "Fractions",
    "question": "3/5 of the animals on a farm are ducks and the rest are chickens. 1/5 of the chickens are brown and the rest are white. If there are 24 white chickens, how many more ducks than chickens are there on the farm?",
    "answer": "15 more ducks",
    "model": "fraction-of-remainder",
    "hint": "White chickens are 4/5 of all chickens. Find the total chickens 1st, then use the 3:2 ratio of ducks to chickens.",
    "questionZh": "农场里的动物中，3/5是鸭子，其余是鸡。鸡中有1/5是棕色的，其余是白色的。如果有24只白鸡，农场里鸭子比鸡多多少只？",
    "hintZh": "白鸡占所有鸡的4/5。第1步求鸡的总数，再利用鸭与鸡的3:2比例。",
    "solution": {
      "en": {
        "strategy": "Use the white-chicken fraction to find all chickens, then use the 3:2 ducks-to-chickens ratio to compare their counts.",
        "steps": [
          {
            "title": "Find the total chickens",
            "text": "Of the chickens, 1/5 are brown, so 4/5 are white. If 4/5 is 24 white chickens, all chickens number 24 ÷ 4 × 5 = 30."
          },
          {
            "title": "Find the ducks",
            "text": "Ducks are 3/5 of the farm and chickens are the remaining 2/5, so ducks : chickens = 3 : 2. If 2 parts equal 30 chickens, 1 part is 15 and ducks are 3 × 15 = 45."
          },
          {
            "title": "Compare the counts",
            "text": "45 − 30 = 15, so there are 15 more ducks than chickens."
          }
        ],
        "answerCheck": "15 more ducks"
      },
      "zh-Hans": {
        "strategy": "先利用白鸡占鸡总数的分数求全部鸡的数量，再用鸭和鸡的3:2比比较它们的数量。",
        "steps": [
          {
            "title": "求鸡的总数",
            "text": "鸡中有1/5是棕色，所以4/5是白色。4/5对应24只白鸡，因此鸡的总数是24 ÷ 4 × 5 = 30只。"
          },
          {
            "title": "求鸭的数量",
            "text": "鸭占农场动物的3/5，鸡占剩下的2/5，所以鸭 : 鸡 = 3 : 2。2份对应30只鸡，1份是15只，鸭有3 × 15 = 45只。"
          },
          {
            "title": "比较鸭和鸡的数量",
            "text": "45 − 30 = 15，因此鸭比鸡多15只。"
          }
        ],
        "answerCheck": "答案：多15只鸭。"
      }
    }
  },
  {
    "id": 18,
    "topic": "Fractions",
    "question": "Susan earns $2450 a month. She spends 2/5 of it and saves the rest. Andy earns $800 less than Susan. He spends $180 more than Susan each month and saves the rest. How much more can Susan save than Andy in 1/2 a year?",
    "answer": "$5880",
    "model": "money-units",
    "hint": "Find Susan's monthly saving, then subtract Andy's lower income and extra spending to get his monthly saving. Multiply the monthly difference by 6.",
    "questionZh": "Susan 每月赚 $2450。她花掉其中的 2/5，剩下的存起来。Andy 每月比 Susan 少赚 $800。他每月比 Susan 多花 $180，其余的钱存起来。在 1/2 年内，Susan 比 Andy 能多存多少钱？",
    "hintZh": "先求 Susan 每月的储蓄额，再从 Andy 较低的收入中扣除额外支出，求出他每月的储蓄额。将每月的差额乘以 6。",
    "solution": {
      "en": {
        "strategy": "Find each person's monthly saving, then compare the savings over 6 months.",
        "steps": [
          {
            "title": "Find Susan's monthly saving",
            "text": "Susan spends 2/5 of $2450: 2/5 × 2450 = $980. She saves $2450 − $980 = $1470 each month."
          },
          {
            "title": "Find Andy's monthly saving",
            "text": "Andy earns $2450 − $800 = $1650. He spends $980 + $180 = $1160, so he saves $1650 − $1160 = $490 each month."
          },
          {
            "title": "Compare 6 months of saving",
            "text": "Susan saves $1470 − $490 = $980 more each month. Since 1/2 a year is 6 months, $980 × 6 = $5880."
          }
        ],
        "answerCheck": "The difference over 6 months is $5880."
      },
      "zh-Hans": {
        "strategy": "先分别求出两人每月的储蓄，再比较6个月的储蓄差。",
        "steps": [
          {
            "title": "求苏珊每月的储蓄",
            "text": "苏珊花掉$2450的2/5：2/5 × 2450 = $980。她每月储蓄$2450 − $980 = $1470。"
          },
          {
            "title": "求安迪每月的储蓄",
            "text": "安迪收入$2450 − $800 = $1650。他每月花$980 + $180 = $1160，所以储蓄$1650 − $1160 = $490。"
          },
          {
            "title": "比较6个月的储蓄",
            "text": "苏珊每月多储蓄$1470 − $490 = $980。1/2年是6个月，因此$980 × 6 = $5880。"
          }
        ],
        "answerCheck": "6个月的储蓄差是$5880。"
      }
    }
  },
  {
    "id": 19,
    "topic": "Fractions",
    "question": "On Monday, a shopkeeper sold 12 1/2 kg of flour. He sold 5/6 kg more flour on Tuesday than on Monday. On Wednesday, he sold 1 1/3 kg less flour than on Tuesday. He then had 1/3 kg of flour left in his shop. How much flour did he have at 1st?",
    "answer": "38 1/6 kg",
    "model": "mass-bar",
    "hint": "Calculate Tuesday from Monday, then Wednesday from Tuesday. Add the 3 daily sales and the flour left, using sixths as a common denominator.",
    "questionZh": "星期一，某店主卖出 12 1/2 kg 面粉。星期二卖出的面粉比星期一多 5/6 kg。星期三卖出的面粉比星期二少 1 1/3 kg。之后，他店里还剩 1/3 kg 面粉。他起初（1st）有多少面粉？",
    "hintZh": "先根据星期一求出星期二的销量，再根据星期二求出星期三的销量。用 6 作公分母，将 3 天的销量和剩余的面粉相加。",
    "solution": {
      "en": {
        "strategy": "Express all daily sales in sixths, then add the sales and the flour left.",
        "steps": [
          {
            "title": "Find Tuesday and Wednesday sales",
            "text": "Monday's sale was 12 1/2 = 75/6 kg. Tuesday's sale was 75/6 + 5/6 = 80/6 kg. Wednesday's sale was 80/6 − 1 1/3 = 80/6 − 8/6 = 72/6 kg."
          },
          {
            "title": "Add all flour accounted for",
            "text": "The total sold was 75/6 + 80/6 + 72/6 = 227/6 kg. The 1/3 kg left is 2/6 kg, so the starting amount was 227/6 + 2/6 = 229/6 = 38 1/6 kg."
          }
        ],
        "answerCheck": "He had 38 1/6 kg at 1st."
      },
      "zh-Hans": {
        "strategy": "把每天卖出的面粉都化成以6为分母的分数，再加上剩余量。",
        "steps": [
          {
            "title": "求星期二和星期三的销量",
            "text": "星期一卖12 1/2 = 75/6 kg。星期二卖75/6 + 5/6 = 80/6 kg。星期三比星期二少1 1/3 = 8/6 kg，所以卖80/6 − 8/6 = 72/6 kg。"
          },
          {
            "title": "合计卖出和剩余的面粉",
            "text": "3天共卖75/6 + 80/6 + 72/6 = 227/6 kg。剩下1/3 = 2/6 kg，所以开始有227/6 + 2/6 = 229/6 = 38 1/6 kg。"
          }
        ],
        "answerCheck": "开始时有38 1/6 kg面粉。"
      }
    }
  },
  {
    "id": 20,
    "topic": "Fractions",
    "question": "2/7 of the toy cars in a box are silver. 1/10 of the remainder are yellow and the rest are black. If there are 28 silver toy cars, how many black toy cars are there in the box?",
    "answer": "63 black toy cars",
    "model": "fraction-of-remainder",
    "hint": "Use the silver cars to find the total. Yellow cars are 1/10 of the 5/7 remainder; subtract silver and yellow from the total.",
    "questionZh": "某个盒子中有 2/7 的玩具汽车是银色的。剩余玩具汽车中的 1/10 是黄色的，其余是黑色的。如果有 28 辆银色玩具汽车，盒子里有多少辆黑色玩具汽车？",
    "hintZh": "利用银色玩具汽车的数量求出总数。黄色玩具汽车是剩余 5/7 中的 1/10；从总数中减去银色和黄色玩具汽车。",
    "solution": {
      "en": {
        "strategy": "Use the silver fraction to find the total, then remove the silver and yellow cars.",
        "steps": [
          {
            "title": "Find the total number of cars",
            "text": "28 silver cars are 2/7 of the box. Therefore the total is 28 ÷ 2/7 = 28 × 7/2 = 98 cars."
          },
          {
            "title": "Find yellow and black cars",
            "text": "After the silver cars, 98 − 28 = 70 cars remain. Yellow cars are 1/10 of 70, or 7. The black cars are 70 − 7 = 63."
          }
        ],
        "answerCheck": "There are 63 black toy cars."
      },
      "zh-Hans": {
        "strategy": "利用银色车所占的分数求总数，再从剩余车辆中扣除黄色车。",
        "steps": [
          {
            "title": "求玩具车总数",
            "text": "28辆银色玩具车占全盒的2/7，所以总数是28 ÷ 2/7 = 28 × 7/2 = 98辆。"
          },
          {
            "title": "求黄色车和黑色车",
            "text": "扣除银色车后，剩下98 − 28 = 70辆。黄色车是70的1/10，即7辆。黑色车有70 − 7 = 63辆。"
          }
        ],
        "answerCheck": "有63辆黑色玩具车。"
      }
    }
  },
  {
    "id": 21,
    "topic": "Fractions",
    "question": "Andrew and Ryan shared some chocolates. Andrew gave away 1/4 of his chocolates. 1/4 of the given chocolates were taken by Ryan. Ryan then had the same number of chocolates as Andrew. If Andrew gave away 12 chocolates, how many chocolates did each of them have at 1st?",
    "answer": "Andrew: 48 chocolates; Ryan: 33 chocolates",
    "model": "fraction-of-remainder",
    "hint": "The 12 chocolates given away are 1/4 of Andrew's original amount. Ryan receives 1/4 of those 12; use the equal final amounts to work backwards.",
    "questionZh": "Andrew 和 Ryan 分了若干巧克力。Andrew 送出了自己巧克力的 1/4。送出的巧克力中有 1/4 被 Ryan 拿走。此后，Ryan 的巧克力数量与 Andrew 相同。如果 Andrew 送出了 12 块巧克力，他们起初（1st）各有多少块巧克力？",
    "hintZh": "送出的 12 块巧克力是 Andrew 原有数量的 1/4。Ryan 得到这 12 块中的 1/4；利用 2 人最后数量相等这个条件倒推。",
    "solution": {
      "en": {
        "strategy": "Work from Andrew's given-away amount, then reverse the equal final amounts.",
        "steps": [
          {
            "title": "Find Andrew's original and final amounts",
            "text": "The 12 chocolates Andrew gave away were 1/4 of his original amount. Thus Andrew originally had 12 × 4 = 48 chocolates, and he had 48 − 12 = 36 after giving them away."
          },
          {
            "title": "Find Ryan's original amount",
            "text": "Ryan took 1/4 of the 12 given chocolates, which is 12 ÷ 4 = 3 chocolates. Ryan finished with the same 36 chocolates as Andrew, so he started with 36 − 3 = 33 chocolates."
          }
        ],
        "answerCheck": "Andrew: 48 chocolates; Ryan: 33 chocolates."
      },
      "zh-Hans": {
        "strategy": "先由安德鲁送出的数量求出他的原有数量，再从两人最后相等的数量倒推。",
        "steps": [
          {
            "title": "求安德鲁原有和剩下的巧克力",
            "text": "安德鲁送出的12颗是他原有数量的1/4，所以他原有12 × 4 = 48颗。送出后剩48 − 12 = 36颗。"
          },
          {
            "title": "求瑞安原有的巧克力",
            "text": "瑞安拿走送出巧克力的1/4，即12 ÷ 4 = 3颗。瑞安最后也有36颗，所以开始时有36 − 3 = 33颗。"
          }
        ],
        "answerCheck": "安德鲁有48颗巧克力；瑞安有33颗巧克力。"
      }
    }
  },
  {
    "id": 22,
    "topic": "Fractions",
    "question": "Boxes A and B contained 112 pencils. When 1/5 of the pencils in box A were transferred to box B, both boxes contained the same number of pencils. How many more pencils were there in box A than in box B at 1st?",
    "answer": "28 pencils",
    "model": "bar-change",
    "hint": "After transferring 1/5 of Box A, both boxes are equal. Draw Box A as 5 units and compare the before-and-after total of 112.",
    "questionZh": "盒子 A 和 B 中共有 112 支铅笔。当盒子 A 中的 1/5 铅笔转移到盒子 B 后，2 个盒子中的铅笔数量相同。起初（1st）盒子 A 比盒子 B 多多少支铅笔？",
    "hintZh": "转移盒子 A 中的 1/5 后，2 个盒子中的数量相等。将盒子 A 画成 5 个单位，并结合转移前后的总数 112 进行比较。",
    "solution": {
      "en": {
        "strategy": "Model box A as 5 equal units because 1/5 of it is transferred.",
        "steps": [
          {
            "title": "Set up the unit model",
            "text": "Let box A initially contain 5 units. Transferring 1/5 of A moves 1 unit, leaving 4 units in A. For the boxes to be equal, box B must initially have 3 units, because 3 + 1 = 4."
          },
          {
            "title": "Find the difference",
            "text": "Together the boxes have 5 + 3 = 8 units, equal to 112 pencils. Thus 1 unit is 112 ÷ 8 = 14 pencils. The initial difference is 5 − 3 = 2 units, or 2 × 14 = 28 pencils."
          }
        ],
        "answerCheck": "Box A had 28 pencils more than box B at 1st."
      },
      "zh-Hans": {
        "strategy": "因为转走盒A的1/5，所以把盒A原有数量看作5个相等单位。",
        "steps": [
          {
            "title": "建立单位模型",
            "text": "设盒A开始有5个单位。转走1/5就是转走1个单位，盒A剩4个单位。转走后两盒相等，因此盒B开始应有3个单位，因为3 + 1 = 4。"
          },
          {
            "title": "求原来的差",
            "text": "两盒共5 + 3 = 8个单位，对应112支铅笔，所以1个单位是112 ÷ 8 = 14支。原来的差是5 − 3 = 2个单位，即2 × 14 = 28支。"
          }
        ],
        "answerCheck": "开始时盒A比盒B多28支铅笔。"
      }
    }
  },
  {
    "id": 23,
    "topic": "Fractions",
    "question": "Andrea spent 1/5 of her salary on food and 1/10 on transport. She gave the remaining amount to her 3 brothers equally. 1 of her brothers spent all his money on a radio and a watch that cost $86 and $145 respectively. What was Andrea's salary?",
    "answer": "$990",
    "model": "fraction-of-remainder",
    "hint": "1 brother received $86 + $145. Multiply by 3 for the total remainder, then recognise that this remainder is 7/10 of Andrea's salary.",
    "questionZh": "Andrea 将薪水的 1/5 用于食物，1/10 用于交通。她把剩余的钱平均给了她的 3 位兄弟。其中 1 位兄弟把所有钱都花在了 1 台收音机和 1 块手表上，价格分别为 $86 和 $145。Andrea 的薪水是多少？",
    "hintZh": "1 位兄弟得到的钱为 $86 + $145。乘以 3 得到剩余金额的总数，再注意到这笔剩余金额是 Andrea 薪水的 7/10。",
    "solution": {
      "en": {
        "strategy": "Find one brother's share, combine the 3 equal shares, and scale up from the remaining 7/10 of the salary.",
        "steps": [
          {
            "title": "Find the money received by one brother",
            "text": "The radio and watch cost $86 + $145 = $231. Since one brother spent all of his share on them, each brother received $231."
          },
          {
            "title": "Recover Andrea's salary",
            "text": "The 3 brothers received $231 × 3 = $693. Andrea kept 1 − 1/5 − 1/10 = 7/10 of her salary for the brothers. Therefore her salary was $693 ÷ 7/10 = $693 × 10/7 = $990."
          }
        ],
        "answerCheck": "Andrea's salary was $990."
      },
      "zh-Hans": {
        "strategy": "先求1个兄弟所得的钱，再把3份相加，并由薪水的7/10反求总薪水。",
        "steps": [
          {
            "title": "求1个兄弟得到的钱",
            "text": "收音机和手表共花$86 + $145 = $231。这个兄弟把所有钱都花在这两样物品上，所以每个兄弟得到$231。"
          },
          {
            "title": "反求安德烈娅的薪水",
            "text": "3个兄弟共得到$231 × 3 = $693。安德烈娅给兄弟们的钱占薪水的1 − 1/5 − 1/10 = 7/10。因此她的薪水是$693 ÷ 7/10 = $693 × 10/7 = $990。"
          }
        ],
        "answerCheck": "安德烈娅的薪水是$990。"
      }
    }
  },
  {
    "id": 24,
    "topic": "Fractions",
    "question": "Ann and James had some stickers. After Ann gave James 1/4 of her stickers, James had 2 times as many stickers as Ann. If they had a total of 117 stickers, how many stickers did each of them have in the beginning?",
    "answer": "James: 65 stickers; Ann: 52 stickers",
    "model": "bar-change",
    "hint": "Treat Ann's original amount as 4 equal parts. After 1 part moves to James, the final ratio is 2:1; use the unchanged total of 117.",
    "questionZh": "Ann 和 James 有若干贴纸。Ann 给了 James 自己贴纸的 1/4 后，James 的贴纸数量是 Ann 的 2 倍。如果他们共有 117 张贴纸，起初 2 人各有多少张贴纸？",
    "hintZh": "将 Ann 起初的数量视为 4 个相等部分。转移 1 个部分给 James 后，最终比为 2:1；利用不变的总数 117。",
    "solution": {
      "en": {
        "strategy": "Represent Ann's original stickers as 4 units so that the transferred 1/4 is one unit.",
        "steps": [
          {
            "title": "Build the before-and-after model",
            "text": "Let Ann start with 4 units. She gives 1 unit to James and has 3 units left. James then has 2 × 3 = 6 units, so he must have started with 6 − 1 = 5 units."
          },
          {
            "title": "Use the total",
            "text": "Initially they had 4 + 5 = 9 units, equal to 117 stickers. One unit is 117 ÷ 9 = 13 stickers. Ann had 4 × 13 = 52 stickers and James had 5 × 13 = 65 stickers."
          }
        ],
        "answerCheck": "James: 65 stickers; Ann: 52 stickers."
      },
      "zh-Hans": {
        "strategy": "把安原有的贴纸看作4个单位，这样她给出的1/4正好是1个单位。",
        "steps": [
          {
            "title": "建立转移前后的单位关系",
            "text": "设安开始有4个单位。她给詹姆斯1个单位后，自己剩3个单位。詹姆斯这时有安的2倍，即2 × 3 = 6个单位，所以他开始有6 − 1 = 5个单位。"
          },
          {
            "title": "利用总数求每人的数量",
            "text": "开始时共有4 + 5 = 9个单位，对应117张贴纸。1个单位是117 ÷ 9 = 13张。安有4 × 13 = 52张，詹姆斯有5 × 13 = 65张。"
          }
        ],
        "answerCheck": "詹姆斯有65张贴纸；安有52张贴纸。"
      }
    }
  },
  {
    "id": 25,
    "topic": "Fractions",
    "question": "Mrs Brown gave 4/7 of her money to her son. He spent 2/5 of the money on a pair of shoes and the rest on 2 books that cost $18 each. How much did Mrs Brown have at 1st?",
    "answer": "$105",
    "model": "fraction-of-remainder",
    "hint": "The books cost $36, which is the 3/5 of the son's money left after shoes. Find the son's amount, then scale from 4/7 to all of Mrs Brown's money.",
    "questionZh": "Brown 太太将自己钱的 4/7 给了儿子。儿子将其中的 2/5 用来买 1 双鞋，剩下的钱买了 2 本书，每本书售价 $18。Brown 太太起初（1st）有多少钱？",
    "hintZh": "书的总价是 $36，这相当于儿子买鞋后剩下的钱的 3/5。先求儿子得到的钱，再由 4/7 推算 Brown 太太所有的钱。",
    "solution": {
      "en": {
        "strategy": "Use the book cost to find the son's amount, then scale from 4/7 to all of Mrs Brown's money.",
        "steps": [
          {
            "title": "Find the son's money",
            "text": "The 2 books cost 2 × $18 = $36. This is the 3/5 left after the son spent 2/5 on shoes. Therefore the son received $36 ÷ 3/5 = $36 × 5/3 = $60."
          },
          {
            "title": "Find Mrs Brown's original money",
            "text": "The $60 given to her son was 4/7 of Mrs Brown's money. Her original amount was $60 ÷ 4/7 = $60 × 7/4 = $105."
          }
        ],
        "answerCheck": "Mrs Brown had $105 at 1st."
      },
      "zh-Hans": {
        "strategy": "先利用书的价钱求儿子得到的钱，再由4/7反求布朗太太所有的钱。",
        "steps": [
          {
            "title": "求儿子得到的钱",
            "text": "2本书花2 × $18 = $36。这是儿子买鞋花掉2/5后剩下的3/5。因此儿子得到$36 ÷ 3/5 = $36 × 5/3 = $60。"
          },
          {
            "title": "求布朗太太原有的钱",
            "text": "给儿子的$60是布朗太太钱的4/7。她原有的钱是$60 ÷ 4/7 = $60 × 7/4 = $105。"
          }
        ],
        "answerCheck": "布朗太太开始时有$105。"
      }
    }
  },
  {
    "id": 26,
    "topic": "Fractions",
    "question": "Ray sold 2/3 of the charity tickets that Cindy sold. Cindy sold 3/4 of the charity tickets that Gina sold. Each charity ticket cost $2. The children collected a total of $648. How many charity tickets did Gina sell?",
    "answer": "144 charity tickets",
    "model": "unit-bar",
    "hint": "1st convert $648 to a total number of tickets. Use a common unit bar: Gina, Cindy, and Ray can be represented by 4, 3, and 2 units.",
    "questionZh": "Ray 卖出的慈善票数是 Cindy 的 2/3。Cindy 卖出的慈善票数是 Gina 的 3/4。每张慈善票售价 $2。孩子们共筹得 $648。Gina 卖出了多少张慈善票？",
    "hintZh": "第 1 步，先将 $648 换算成慈善票总数。使用共同单位条：Gina、Cindy 和 Ray 可分别表示为 4、3 和 2 个单位。",
    "solution": {
      "en": {
        "strategy": "Convert the money total into tickets and use the ratio Gina:Cindy:Ray = 4:3:2.",
        "steps": [
          {
            "title": "Find the number of tickets sold",
            "text": "Each ticket cost $2, so the children sold $648 ÷ $2 = 324 tickets altogether."
          },
          {
            "title": "Use the ticket ratio",
            "text": "Cindy sold 3/4 of Gina's number and Ray sold 2/3 of Cindy's number. Taking Gina as 4 units gives Cindy 3 units and Ray 2 units. Thus 9 units = 324 tickets, so 1 unit = 36 tickets and Gina sold 4 × 36 = 144 tickets."
          }
        ],
        "answerCheck": "Gina sold 144 charity tickets."
      },
      "zh-Hans": {
        "strategy": "先把筹得的钱换成票数，再使用吉娜、辛迪和雷的比4:3:2。",
        "steps": [
          {
            "title": "求总票数",
            "text": "每张票价$2，所以孩子们共卖出$648 ÷ $2 = 324张票。"
          },
          {
            "title": "利用票数比",
            "text": "辛迪卖出的票是吉娜的3/4，雷卖出的票是辛迪的2/3。把吉娜看作4个单位，辛迪是3个单位，雷是2个单位。9个单位是324张，所以1个单位是36张，吉娜卖出4 × 36 = 144张。"
          }
        ],
        "answerCheck": "吉娜卖出144张慈善票。"
      }
    }
  },
  {
    "id": 27,
    "topic": "Fractions",
    "question": "There were 3/4 as many sweets in box A as in box B. 1/2 of the sweets in box A and 3/8 of the sweets in box B were removed. There were then 152 sweets left in both boxes altogether. How many sweets were there in each box at 1st?",
    "answer": "Box A: 114 sweets; Box B: 152 sweets",
    "model": "fraction-of-remainder",
    "hint": "Change 3/4 to 6/8 and model Box A and Box B in eighths. Then keep 1/2 of A and 5/8 of B to represent the 152 remaining sweets.",
    "questionZh": "盒子 A 中糖果的数量是盒子 B 中的 3/4。盒子 A 中的 1/2 糖果和盒子 B 中的 3/8 糖果被拿走。之后，2 个盒子中总共剩下 152 颗糖果。最初（1st）2 盒中各有多少颗糖果？",
    "hintZh": "将 3/4 改写为 6/8，并以 1/8 为单位表示盒子 A 和 B。然后保留 A 的 1/2 和 B 的 5/8，以表示剩下的 152 颗糖果。",
    "solution": {
      "en": {
        "strategy": "Use the initial ratio A:B = 3:4 and apply the fractions that remain in each box.",
        "steps": [
          {
            "title": "Model the remaining sweets",
            "text": "Let box A initially have 3 units and box B have 4 units. Half of A remains, giving 1/2 × 3 = 1 1/2 units. Since 3/8 of B is removed, 5/8 remains, giving 5/8 × 4 = 2 1/2 units."
          },
          {
            "title": "Find the original amounts",
            "text": "The remaining total is 1 1/2 + 2 1/2 = 4 units, and this equals 152 sweets. Thus 1 unit = 152 ÷ 4 = 38 sweets. Initially A had 3 × 38 = 114 sweets and B had 4 × 38 = 152 sweets."
          }
        ],
        "answerCheck": "Box A: 114 sweets; Box B: 152 sweets."
      },
      "zh-Hans": {
        "strategy": "使用盒A和盒B原有数量的比3:4，再计算每盒剩下的分数。",
        "steps": [
          {
            "title": "表示剩下的糖果",
            "text": "设盒A开始有3个单位，盒B开始有4个单位。盒A剩下1/2，所以剩1/2 × 3 = 1 1/2个单位。盒B拿走3/8，剩5/8，所以剩5/8 × 4 = 2 1/2个单位。"
          },
          {
            "title": "求原有糖果数",
            "text": "剩下的总数是1 1/2 + 2 1/2 = 4个单位，对应152颗糖。1个单位是152 ÷ 4 = 38颗。因此盒A原有3 × 38 = 114颗，盒B原有4 × 38 = 152颗。"
          }
        ],
        "answerCheck": "盒A有114颗糖；盒B有152颗糖。"
      }
    }
  },
  {
    "id": 28,
    "topic": "Fractions",
    "question": "After their shopping trip, Mike spent 3/5 of his money, Evon spent 1/2 of hers and Sue spent $50. They then had the same amount of money left. If the total amount of money left was $54, what was the total amount of money Mike and Sue had at 1st?",
    "answer": "$113",
    "model": "money-units",
    "hint": "The 3 equal amounts left total $54. Express Mike's original money as 5 units and Sue's as her equal leftover plus the $50 she spent.",
    "questionZh": "购物后，Mike 花掉自己钱的 3/5，Evon 花掉她的钱的 1/2，而 Sue 花了 $50。之后，他们剩下的钱同样多。如果剩余钱的总额是 $54，Mike 和 Sue 最初（1st）共有多少钱？",
    "hintZh": "剩下的 3 份相等金额总计为 $54。将 Mike 起初的钱表示为 5 个单位；Sue 起初的钱等于她那份相等的余额加上她花掉的 $50。",
    "solution": {
      "en": {
        "strategy": "First find the common amount left, then reconstruct Mike's and Sue's original amounts.",
        "steps": [
          {
            "title": "Find the amount each person had left",
            "text": "Mike, Evon, and Sue had equal amounts left, and together they had $54. Each therefore had $54 ÷ 3 = $18 left."
          },
          {
            "title": "Find Mike's and Sue's starting amounts",
            "text": "Mike had 2/5 of his money left, so his original amount was $18 ÷ 2/5 = $45. Sue spent $50 and had $18 left, so she started with $50 + $18 = $68. Their total was $45 + $68 = $113."
          }
        ],
        "answerCheck": "Mike and Sue had $113 altogether at 1st."
      },
      "zh-Hans": {
        "strategy": "先求3人相同的剩余金额，再还原迈克和苏原有的金额。",
        "steps": [
          {
            "title": "求每人剩下的钱",
            "text": "迈克、伊冯和苏剩下的钱相同，合共$54。因此每人剩$54 ÷ 3 = $18。"
          },
          {
            "title": "求迈克和苏开始时的钱",
            "text": "迈克剩下原有钱的2/5，所以原有$18 ÷ 2/5 = $45。苏花掉$50后剩$18，所以开始有$50 + $18 = $68。两人合共有$45 + $68 = $113。"
          }
        ],
        "answerCheck": "迈克和苏开始时合共有$113。"
      }
    }
  },
  {
    "id": 29,
    "topic": "Fractions",
    "question": "A baker sold 2 times as many buns on Sunday than on Saturday. On Monday, he sold 1/4 of the buns he sold on Sunday. If he sold a total of 1260 buns during the 3 days, how many buns did he sell on Sunday?",
    "answer": "720 buns",
    "model": "unit-bar",
    "hint": "Draw Saturday as 2 units, Sunday as 4 units and Monday as 1 unit, so every day is a whole number of units. All 7 units together are 1260.",
    "questionZh": "某面包师星期日卖出的面包数量是星期六的 2 倍。星期一，他卖出的面包数量是星期日的 1/4。如果他在这 3 天共卖出 1260 个面包，星期日卖出了多少个？",
    "hintZh": "把星期六表示为2份，星期日为4份，星期一为1份，这样每天都是完整的份数。7份合起来是1260。",
    "solution": {
      "en": {
        "strategy": "Express Saturday, Sunday, and Monday as multiples of Saturday's sales.",
        "steps": [
          {
            "title": "Set up the day-to-day amounts",
            "text": "Let Saturday's sales be 1 unit. Sunday sales were 2 units, and Monday sales were 1/4 of Sunday, or 1/2 unit."
          },
          {
            "title": "Find Sunday's sales",
            "text": "The 3 days total 1 + 2 + 1/2 = 3 1/2 units = 1260 buns. One unit is 1260 ÷ 3 1/2 = 360 buns. Sunday sales were 2 × 360 = 720 buns."
          }
        ],
        "answerCheck": "He sold 720 buns on Sunday."
      },
      "zh-Hans": {
        "strategy": "把星期六、星期日和星期一的销量都表示成星期六销量的倍数。",
        "steps": [
          {
            "title": "建立每天销量的关系",
            "text": "设星期六卖出1个单位。星期日卖出2个单位，星期一卖出星期日的1/4，即1/2个单位。"
          },
          {
            "title": "求星期日销量",
            "text": "3天共1 + 2 + 1/2 = 3 1/2个单位，对应1260个面包。1个单位是1260 ÷ 3 1/2 = 360个。星期日卖出2 × 360 = 720个。"
          }
        ],
        "answerCheck": "星期日卖出720个面包。"
      }
    }
  },
  {
    "id": 30,
    "topic": "Fractions",
    "question": "Joan and Alan had some money. 2/3 of Joan's money was 1/2 of what Alan had. If Alan spent all his money on a book that cost $45 and a wallet that cost $98, how much did Joan and Alan have altogether?",
    "answer": "$250.25",
    "model": "money-units",
    "hint": "Find Alan's money from the book and wallet. If 2/3 of Joan equals 1/2 of Alan, make both amounts use the same 6-part bar.",
    "questionZh": "Joan 和 Alan 有些钱。Joan 钱的 2/3 等于 Alan 所有钱的 1/2。如果 Alan 将所有钱都用来买 1 本售价 $45 的书和 1 个售价 $98 的钱包，Joan 和 Alan 总共有多少钱？",
    "hintZh": "根据书和钱包的价格求出 Alan 的钱。若 Joan 的 2/3 等于 Alan 的 1/2，就让这 2 个数量都用相同的 6 等分单位条表示。",
    "solution": {
      "en": {
        "strategy": "Find Alan's money from the purchases, then use the equality between 2/3 of Joan's money and 1/2 of Alan's money.",
        "steps": [
          {
            "title": "Find Alan's amount",
            "text": "Alan spent all his money on a $45 book and a $98 wallet, so he had $45 + $98 = $143."
          },
          {
            "title": "Find Joan's amount and the total",
            "text": "Half of Alan's money is $143 ÷ 2 = $71.50. This equals 2/3 of Joan's money, so Joan had $71.50 ÷ 2/3 = $107.25. Together they had $143 + $107.25 = $250.25."
          }
        ],
        "answerCheck": "Joan and Alan had $250.25 altogether."
      },
      "zh-Hans": {
        "strategy": "先由艾伦购买物品的价钱求出他的钱，再用琼的2/3等于艾伦的1/2这个关系求解。",
        "steps": [
          {
            "title": "求艾伦的钱数",
            "text": "艾伦把所有钱买了$45的书和$98的钱包，所以他有$45 + $98 = $143。"
          },
          {
            "title": "求琼的钱和总数",
            "text": "艾伦钱的1/2是$143 ÷ 2 = $71.50。这等于琼钱的2/3，所以琼有$71.50 ÷ 2/3 = $107.25。两人合共$143 + $107.25 = $250.25。"
          }
        ],
        "answerCheck": "琼和艾伦合共有$250.25。"
      }
    }
  },
  {
    "id": 31,
    "topic": "Fractions",
    "question": "Boxes A and B contained 150 marbles altogether. When 1/3 of the marbles in box A were transferred to box B and 12 marbles were taken out from box B, there were 2 times as many marbles in box B than in box A. How many marbles were there in box B in the beginning?",
    "answer": "81 marbles",
    "model": "bar-change",
    "hint": "After the 12 marbles are removed, 138 remain and the final boxes are in a 1:2 ratio. Reverse the transfer of 1/3 of Box A to recover Box B's starting amount.",
    "questionZh": "盒子 A 和 B 中共有 150 颗弹珠。当盒子 A 中的 1/3 弹珠转移到盒子 B，且从盒子 B 中取出 12 颗弹珠后，盒子 B 中的弹珠数量是盒子 A 的 2 倍。起初盒子 B 中有多少颗弹珠？",
    "hintZh": "取出 12 颗弹珠后，还剩 138 颗，最后 2 个盒子的数量比为 1:2。逆向还原盒子 A 中的 1/3 转移过程，以求出盒子 B 起初的数量。",
    "solution": {
      "en": {
        "strategy": "Use the final 1:2 ratio after the 12 marbles are removed, then reverse the transfer.",
        "steps": [
          {
            "title": "Find the final amounts",
            "text": "After 12 marbles are taken out, 150 − 12 = 138 marbles remain. The final ratio A:B is 1:2, so box A has 138 ÷ 3 = 46 marbles and box B has 2 × 46 = 92 marbles."
          },
          {
            "title": "Reverse the transfer",
            "text": "Box A's final 46 marbles are 2/3 of its original amount, because 1/3 was transferred. Thus A originally had 46 ÷ 2/3 = 69 marbles, so 69 ÷ 3 = 23 were transferred. Box B began with 92 − 23 + 12 = 81 marbles."
          }
        ],
        "answerCheck": "Box B had 81 marbles in the beginning."
      },
      "zh-Hans": {
        "strategy": "先利用拿走12颗后的1:2比例求最后数量，再倒推转移前的数量。",
        "steps": [
          {
            "title": "求最后两盒的数量",
            "text": "拿走12颗后，剩下150 − 12 = 138颗。最后盒A与盒B的比是1:2，所以盒A有138 ÷ 3 = 46颗，盒B有2 × 46 = 92颗。"
          },
          {
            "title": "倒推转移前的数量",
            "text": "盒A最后的46颗是原有数量的2/3，因为转走了1/3。因此盒A原有46 ÷ 2/3 = 69颗，转走69 ÷ 3 = 23颗。盒B开始有92 − 23 + 12 = 81颗。"
          }
        ],
        "answerCheck": "盒B开始时有81颗弹珠。"
      }
    }
  },
  {
    "id": 32,
    "topic": "Fractions",
    "question": "During a sale, Betty bought a watch at 3/5 of its normal price. She then had $220 left. If she had bought the watch at its normal price, she would be $10 short. What was the normal price of the watch?",
    "answer": "$575",
    "model": "money-units",
    "hint": "The difference between paying 3/5 of the price and the full price is $220 + $10. That difference is 2/5 of the normal price.",
    "questionZh": "促销期间，Betty 以手表正常价格的 3/5 买下了 1 块手表。她随后还剩 $220。如果她以正常价格购买这块手表，她会差 $10。手表的正常价格是多少？",
    "hintZh": "支付价格的 3/5 与支付全价之间的差额为 $220 + $10。这个差额是正常价格的 2/5。",
    "solution": {
      "en": {
        "strategy": "Compare the amount paid in the sale with the normal price; the difference is 2/5 of the normal price.",
        "steps": [
          {
            "title": "Find the saving between the two prices",
            "text": "At the sale, Betty had $220 left. At the normal price, she would be $10 short. Therefore the normal price exceeds the sale price by $220 + $10 = $230."
          },
          {
            "title": "Find the normal price",
            "text": "The sale price is 3/5 of the normal price, so the difference is 1 − 3/5 = 2/5 of the normal price. Thus 2/5 of the normal price is $230, and the normal price is $230 ÷ 2/5 = $575."
          }
        ],
        "answerCheck": "The normal price was $575."
      },
      "zh-Hans": {
        "strategy": "比较促销价和原价；两者的差额是原价的2/5。",
        "steps": [
          {
            "title": "求两种价格的差额",
            "text": "按促销价买后，贝蒂还剩$220；按原价买则差$10。因此原价比促销价高$220 + $10 = $230。"
          },
          {
            "title": "求原价",
            "text": "促销价是原价的3/5，所以差额是1 − 3/5 = 2/5的原价。2/5的原价为$230，因此原价是$230 ÷ 2/5 = $575。"
          }
        ],
        "answerCheck": "手表的原价是$575。"
      }
    }
  },
  {
    "id": 33,
    "topic": "Fractions",
    "question": "Mr Smith sold 1/4 of his eggs on Monday and 1/4 of the remainder on Tuesday. The rest were sold on Wednesday. If he sold 144 eggs on Wednesday, how many eggs did he have in the beginning?",
    "answer": "256 eggs",
    "model": "fraction-of-remainder",
    "hint": "After Monday, 3/4 remains. Wednesday is 3/4 of that remainder, so it is 9/16 of the original number of eggs.",
    "questionZh": "Smith 先生星期一卖出鸡蛋的 1/4，星期二卖出剩余鸡蛋的 1/4。其余的在星期三卖出。如果他星期三卖出 144 个鸡蛋，他起初有多少个鸡蛋？",
    "hintZh": "星期一后剩下 3/4。星期三的数量是这部分剩余数量的 3/4，因此是原有鸡蛋数量的 9/16。",
    "solution": {
      "en": {
        "strategy": "Express Wednesday's sales as a fraction of the original number of eggs.",
        "steps": [
          {
            "title": "Find the fraction sold on Wednesday",
            "text": "After Monday, 1 − 1/4 = 3/4 of the eggs remained. On Tuesday, 1/4 of that remainder was sold, so 3/4 of the remainder was left for Wednesday. Thus Wednesday's 144 eggs were 3/4 × 3/4 = 9/16 of the original number."
          },
          {
            "title": "Find the original number",
            "text": "If 9/16 of the original number is 144, the original number is 144 ÷ 9/16 = 144 × 16/9 = 256 eggs."
          }
        ],
        "answerCheck": "Mr Smith had 256 eggs in the beginning."
      },
      "zh-Hans": {
        "strategy": "把星期三卖出的鸡蛋数表示为原有鸡蛋数的一个分数。",
        "steps": [
          {
            "title": "求星期三所占的分数",
            "text": "星期一后剩下1 − 1/4 = 3/4。星期二卖出这部分的1/4，因此剩下这部分的3/4留到星期三。星期三卖的144个鸡蛋占原有数量的3/4 × 3/4 = 9/16。"
          },
          {
            "title": "求原有鸡蛋数",
            "text": "原有数量的9/16是144，所以原有数量是144 ÷ 9/16 = 144 × 16/9 = 256个鸡蛋。"
          }
        ],
        "answerCheck": "史密斯先生开始时有256个鸡蛋。"
      }
    }
  },
  {
    "id": 34,
    "topic": "Fractions",
    "question": "Sam could buy 4 magazines and 3 books with all his money. He decided to buy 2 magazines and a book. He then had $84 left. If a magazine cost 1/3 the price of a book, how much did Sam have at 1st?",
    "answer": "$136.50",
    "model": "money-units",
    "hint": "Represent 1 magazine as 1 unit and 1 book as 3 units. The unspent items are 2 magazines and 2 books, worth 8 units and equal to $84.",
    "questionZh": "Sam 用所有的钱可以买 4 本杂志和 3 本书。他决定买 2 本杂志和 1 本书，之后还剩 $84。如果 1 本杂志的价格是 1 本书价格的 1/3，Sam 起初（1st）有多少钱？",
    "hintZh": "将 1 本杂志表示为 1 个单位，将 1 本书表示为 3 个单位。未购买的物品是 2 本杂志和 2 本书，价值为 8 个单位，等于 $84。",
    "solution": {
      "en": {
        "strategy": "Use a unit model in which one book costs 3 times one magazine, then use the $84 value of the items not bought.",
        "steps": [
          {
            "title": "Represent the item prices",
            "text": "Let a magazine cost 1 unit. Since a magazine costs 1/3 of a book, a book costs 3 units. All of Sam's money could buy 4 magazines and 3 books, worth 4 × 1 + 3 × 3 = 13 units."
          },
          {
            "title": "Find the value of one unit and all his money",
            "text": "Sam bought 2 magazines and 1 book, worth 2 × 1 + 1 × 3 = 5 units. The $84 left equals 13 − 5 = 8 units, so 1 unit is $84 ÷ 8 = $10.50. All his money was 13 × $10.50 = $136.50."
          }
        ],
        "answerCheck": "Sam had $136.50 at 1st."
      },
      "zh-Hans": {
        "strategy": "把1本书的价格表示成1本杂志的3倍，再利用没有买的物品价值为$84。",
        "steps": [
          {
            "title": "表示物品价格",
            "text": "设1本杂志价钱是1个单位。杂志价钱是书的1/3，所以1本书价钱是3个单位。萨姆所有的钱可买4本杂志和3本书，价值4 × 1 + 3 × 3 = 13个单位。"
          },
          {
            "title": "求每单位价值和总钱数",
            "text": "萨姆买了2本杂志和1本书，价值2 × 1 + 1 × 3 = 5个单位。剩下的$84对应13 − 5 = 8个单位，所以1个单位是$84 ÷ 8 = $10.50。他所有的钱是13 × $10.50 = $136.50。"
          }
        ],
        "answerCheck": "萨姆开始时有$136.50。"
      }
    }
  },
  {
    "id": 35,
    "topic": "Fractions",
    "question": "A farmer sold some eggs in the morning. He then packed the remaining eggs into 15 cartons with 25 eggs in each carton. If the number of eggs he sold was 3/5 of the number of eggs he packed, how many eggs did the farmer have at 1st?",
    "answer": "600 eggs",
    "model": "fraction-of-remainder",
    "hint": "The packed eggs are 15 × 25. Let the packed eggs be 5 units, so the eggs he sold are 3 units. Find 1 unit, then add both parts.",
    "questionZh": "一位农夫上午卖出了一些鸡蛋。他把剩下的鸡蛋装进15个纸箱，每箱25个。若他卖出的鸡蛋数量是他装箱数量的3/5，农夫开始时有多少个鸡蛋？",
    "hintZh": "装箱的鸡蛋是15 × 25个。把装箱的鸡蛋看作5份，那么卖出的鸡蛋是3份。先求1份，再把两部分相加。",
    "solution": {
      "en": {
        "strategy": "Find the packed eggs, use the 3:5 sold-to-packed relationship, then combine both quantities.",
        "steps": [
          {
            "title": "Find the eggs packed",
            "text": "The farmer packed 15 × 25 = 375 eggs."
          },
          {
            "title": "Find the eggs sold",
            "text": "If 375 packed eggs are 5 equal parts, 1 part is 375 ÷ 5 = 75 eggs. The eggs sold were 3 parts: 3 × 75 = 225 eggs."
          },
          {
            "title": "Find the starting total",
            "text": "At first he had the eggs sold plus the eggs packed: 225 + 375 = 600 eggs."
          }
        ],
        "answerCheck": "Answer: 600 eggs."
      },
      "zh-Hans": {
        "strategy": "先求装箱的鸡蛋数，再按卖出数与装箱数的3:5关系求卖出数，最后相加。",
        "steps": [
          {
            "title": "求装箱的鸡蛋数",
            "text": "装箱的鸡蛋有15 × 25 = 375个。"
          },
          {
            "title": "求卖出的鸡蛋数",
            "text": "375个装箱鸡蛋是5份，所以1份是375 ÷ 5 = 75个。卖出的鸡蛋是3份，即3 × 75 = 225个。"
          },
          {
            "title": "求原有总数",
            "text": "开始时的鸡蛋数 = 卖出的225个 + 装箱的375个 = 600个。"
          }
        ],
        "answerCheck": "答案：600个鸡蛋。"
      }
    }
  },
  {
    "id": 36,
    "topic": "Fractions",
    "question": "There were some candles in a box. 1/3 of the candles were green. There were 2 times as many blue candles as red candles and 1/4 as many yellow candles as red candles. If there were 24 red candles, how many candles were there in the box altogether?",
    "answer": "117 candles",
    "model": "unit-bar",
    "hint": "Find the yellow and blue candles from the 24 red candles. Those 3 colours together are the 2/3 that is not green, so they make 2 units of the whole box.",
    "questionZh": "一个盒子里有一些蜡烛。其中1/3是绿色的。蓝色蜡烛的数量是红色的2倍，黄色蜡烛的数量是红色的1/4。若红色蜡烛有24支，盒子里一共有多少支蜡烛？",
    "hintZh": "由24支红色蜡烛求出黄色和蓝色的数量。这3种颜色合起来就是不含绿色的2/3，也就是整盒的2份。",
    "solution": {
      "en": {
        "strategy": "Calculate the red, blue, and yellow candles first; together they make the non-green 2/3 of the total.",
        "steps": [
          {
            "title": "Find blue and yellow candles",
            "text": "There are 24 red candles. Blue candles = 2 × 24 = 48, and yellow candles = 1/4 × 24 = 6."
          },
          {
            "title": "Find the non-green part",
            "text": "Red, blue, and yellow candles total 24 + 48 + 6 = 78. Since green candles are 1/3 of the box, these 78 candles are the other 2/3."
          },
          {
            "title": "Find all candles",
            "text": "The total is 78 ÷ 2 × 3 = 117 candles."
          }
        ],
        "answerCheck": "Answer: 117 candles."
      },
      "zh-Hans": {
        "strategy": "先求红、蓝、黄三种蜡烛的数量；它们合起来占总数中不是绿色的2/3。",
        "steps": [
          {
            "title": "求蓝色和黄色蜡烛",
            "text": "红色有24支。蓝色有2 × 24 = 48支，黄色有1/4 × 24 = 6支。"
          },
          {
            "title": "求非绿色蜡烛数",
            "text": "红、蓝、黄蜡烛共24 + 48 + 6 = 78支。绿色占1/3，所以这78支占总数的2/3。"
          },
          {
            "title": "求总数",
            "text": "蜡烛总数 = 78 ÷ 2 × 3 = 117支。"
          }
        ],
        "answerCheck": "答案：117支蜡烛。"
      }
    }
  },
  {
    "id": 37,
    "topic": "Fractions",
    "question": "There were 2 times as many oranges as apples in a box and 3 times as many pears as apples. When 1/4 of the oranges were eaten, there were 21 oranges left in the box. How many pieces of fruit were there in the box at 1st?",
    "answer": "84 pieces of fruit",
    "model": "unit-bar",
    "hint": "Use the 21 remaining oranges to find the original number of oranges, then express apples and pears in terms of apples.",
    "questionZh": "一个盒子里的橙子数量是苹果的2倍，梨的数量是苹果的3倍。吃掉橙子的1/4后，盒子里还剩21个橙子。开始时盒子里共有多少个水果？",
    "hintZh": "由剩下的21个橙子求原来的橙子数，再用苹果表示苹果和梨的数量。",
    "solution": {
      "en": {
        "strategy": "Recover the original oranges from the 21 left, then use the fruit ratios based on apples.",
        "steps": [
          {
            "title": "Find the original oranges",
            "text": "After 1/4 of the oranges were eaten, 3/4 remained. Thus the original number of oranges was 21 ÷ 3 × 4 = 28."
          },
          {
            "title": "Find apples and pears",
            "text": "Oranges were twice the apples, so apples = 28 ÷ 2 = 14. Pears were 3 times the apples: 3 × 14 = 42."
          },
          {
            "title": "Add all the fruit",
            "text": "The starting total was 28 + 14 + 42 = 84 pieces of fruit."
          }
        ],
        "answerCheck": "Answer: 84 pieces of fruit."
      },
      "zh-Hans": {
        "strategy": "由剩下的橙子数倒推原来橙子数，再利用以苹果为基准的倍数关系。",
        "steps": [
          {
            "title": "求原来橙子数",
            "text": "吃掉1/4后剩下3/4，即21个。因此原来有21 ÷ 3 × 4 = 28个橙子。"
          },
          {
            "title": "求苹果和梨的数量",
            "text": "橙子数是苹果数的2倍，所以苹果有28 ÷ 2 = 14个。梨数是苹果数的3倍，即3 × 14 = 42个。"
          },
          {
            "title": "求水果总数",
            "text": "开始时共有28 + 14 + 42 = 84个水果。"
          }
        ],
        "answerCheck": "答案：84个水果。"
      }
    }
  },
  {
    "id": 38,
    "topic": "Fractions",
    "question": "Elaine had some sweets. When she ate 2/7 of them and gave 36 sweets to her brother, she had 2/7 of the sweets left. How many sweets did she have at 1st?",
    "answer": "84 sweets",
    "model": "bar-change",
    "hint": "Compare the fraction after eating with the fraction finally left. The difference is the 36 sweets given away.",
    "questionZh": "伊莱恩有一些糖。她吃掉其中的2/7，又给弟弟36颗糖后，剩下的糖是原来糖数的2/7。伊莱恩开始时有多少颗糖？",
    "hintZh": "比较吃掉后的分数和最后剩下的分数，两者的差就是送出的36颗糖。",
    "solution": {
      "en": {
        "strategy": "Compare the fraction remaining immediately after eating with the final fraction; the difference was given to her brother.",
        "steps": [
          {
            "title": "Find the fraction after eating",
            "text": "Elaine ate 2/7 of her sweets, so 1 − 2/7 = 5/7 remained."
          },
          {
            "title": "Relate the 36 sweets to the whole",
            "text": "She finally had 2/7 left. Therefore the 36 sweets given away were 5/7 − 2/7 = 3/7 of the original number."
          },
          {
            "title": "Find the original number",
            "text": "If 3/7 is 36, then 1/7 is 36 ÷ 3 = 12. The original number was 12 × 7 = 84 sweets."
          }
        ],
        "answerCheck": "Answer: 84 sweets."
      },
      "zh-Hans": {
        "strategy": "比较吃掉后剩下的分数和最后剩下的分数；两者的差就是给弟弟的糖。",
        "steps": [
          {
            "title": "求吃掉后剩下的分数",
            "text": "吃掉2/7后，剩下1 − 2/7 = 5/7。"
          },
          {
            "title": "把36颗糖对应到原数",
            "text": "最后剩2/7，所以给弟弟的36颗糖占原数的5/7 − 2/7 = 3/7。"
          },
          {
            "title": "求原来糖数",
            "text": "3/7是36，那么1/7是36 ÷ 3 = 12。原来有12 × 7 = 84颗糖。"
          }
        ],
        "answerCheck": "答案：84颗糖。"
      }
    }
  },
  {
    "id": 39,
    "topic": "Fractions",
    "question": "Jug A contained 3 5/12 L of water. Jug A contained 1 2/3 L less water than jug B. Jug C contained 5/6 L less water than jug B. The water in the 3 jugs was poured into a container. How much water was there in the container in the end?",
    "answer": "12 3/4 L",
    "model": "unit-bar",
    "hint": "1st find jug B by adding its difference to jug A; then find jug C by subtracting from jug B.",
    "questionZh": "A壶装有3 5/12 L水。A壶的水比B壶少1 2/3 L。C壶的水比B壶少5/6 L。把3壶中的水倒入一个容器后，容器里共有多少水？",
    "hintZh": "先把A壶与B壶的差加到A壶，求出B壶；再从B壶减去相差的量，求出C壶。",
    "solution": {
      "en": {
        "strategy": "Use jug A to find jug B, then use jug B to find jug C before adding all three amounts.",
        "steps": [
          {
            "title": "Find jug B",
            "text": "Jug B had 3 5/12 + 1 2/3 = 3 5/12 + 1 8/12 = 5 1/12 L."
          },
          {
            "title": "Find jug C",
            "text": "Jug C had 5 1/12 − 5/6 = 5 1/12 − 10/12 = 4 1/4 L."
          },
          {
            "title": "Add the three jugs",
            "text": "Total water = 3 5/12 + 5 1/12 + 4 1/4 = 12 3/4 L."
          }
        ],
        "answerCheck": "Answer: 12 3/4 L."
      },
      "zh-Hans": {
        "strategy": "先由A壶求B壶的水量，再由B壶求C壶的水量，最后把三壶相加。",
        "steps": [
          {
            "title": "求B壶水量",
            "text": "B壶有3 5/12 + 1 2/3 = 3 5/12 + 1 8/12 = 5 1/12 L。"
          },
          {
            "title": "求C壶水量",
            "text": "C壶有5 1/12 − 5/6 = 5 1/12 − 10/12 = 4 1/4 L。"
          },
          {
            "title": "相加三壶水量",
            "text": "总水量 = 3 5/12 + 5 1/12 + 4 1/4 = 12 3/4 L。"
          }
        ],
        "answerCheck": "答案：12 3/4 L。"
      }
    }
  },
  {
    "id": 40,
    "topic": "Fractions",
    "question": "Mrs Crawford baked some pies. She gave 1/3 of them to her neighbour. She then gave 5/12 of the remainder to a children's home. The rest of the pies were packed into 25 boxes with 14 pies in each box. How many pies did Mrs Crawford bake altogether?",
    "answer": "900 pies",
    "model": "fraction-of-remainder",
    "hint": "The packed pies are 25 × 14. Work backwards: after giving 1/3 away, 2/3 remains, and then 7/12 of that remainder is packed.",
    "questionZh": "克劳福德太太烤了一些派。她把其中的1/3给了邻居，然后把剩余派的5/12给了一所儿童之家。其余的派装入25个盒子，每盒14个。克劳福德太太一共烤了多少个派？",
    "hintZh": "装盒的派有25 × 14个。倒推：送出1/3后剩下2/3，再送出5/12后，剩余部分的7/12被装盒。",
    "solution": {
      "en": {
        "strategy": "Find the packed pies and express them as the fraction remaining after both gifts.",
        "steps": [
          {
            "title": "Find the packed pies",
            "text": "The 25 boxes hold 25 × 14 = 350 pies."
          },
          {
            "title": "Find the packed fraction of the original",
            "text": "After giving 1/3 away, 2/3 remained. Then 5/12 of that remainder was given away, so 7/12 of it was packed. Thus the packed pies were 2/3 × 7/12 = 7/18 of the original."
          },
          {
            "title": "Find the original total",
            "text": "If 7/18 is 350, then the total is 350 ÷ 7 × 18 = 900 pies."
          }
        ],
        "answerCheck": "Answer: 900 pies."
      },
      "zh-Hans": {
        "strategy": "先求装盒的派数，并把它表示成两次送出后剩下的原数分数。",
        "steps": [
          {
            "title": "求装盒的派数",
            "text": "25个盒子共装25 × 14 = 350个派。"
          },
          {
            "title": "求装盒部分占原数的分数",
            "text": "送出1/3后剩2/3；再送出剩余部分的5/12后，装盒的是该剩余部分的7/12。因此装盒的派占原数的2/3 × 7/12 = 7/18。"
          },
          {
            "title": "求原有总数",
            "text": "7/18对应350个，所以原来有350 ÷ 7 × 18 = 900个派。"
          }
        ],
        "answerCheck": "答案：900个派。"
      }
    }
  },
  {
    "id": 41,
    "topic": "Fractions",
    "question": "Sandy spent 3/5 of her money in a toy shop on a teddy bear for $38 and a toy train for $46. The remaining money was then spent on 5 similar books. How much did each book cost?",
    "answer": "$11.20",
    "model": "money-units",
    "hint": "The teddy bear and train together represent 3/5 of Sandy's money. Find the remaining 2/5, then share it equally among 5 books.",
    "questionZh": "桑迪在玩具店花掉自己钱的3/5，买了一只$38的泰迪熊和一列$46的玩具火车。剩余的钱买了5本相同的书。每本书多少钱？",
    "hintZh": "泰迪熊和玩具火车的总价代表桑迪钱的3/5。先求剩余的2/5，再平均分给5本书。",
    "solution": {
      "en": {
        "strategy": "The teddy bear and train make up 3/5 of Sandy's money; find the remaining 2/5 and divide it among five books.",
        "steps": [
          {
            "title": "Find the toy-shop spending",
            "text": "The teddy bear and toy train cost $38 + $46 = $84. This is 3/5 of Sandy's money."
          },
          {
            "title": "Find the money left",
            "text": "Her total money was $84 ÷ 3 × 5 = $140, so she had $140 − $84 = $56 left."
          },
          {
            "title": "Find one book's cost",
            "text": "The $56 bought 5 equal books, so each cost $56 ÷ 5 = $11.20."
          }
        ],
        "answerCheck": "Answer: $11.20."
      },
      "zh-Hans": {
        "strategy": "泰迪熊和玩具火车的价钱占总钱数的3/5；先求剩下的2/5，再平均分到5本书。",
        "steps": [
          {
            "title": "求玩具店花费",
            "text": "泰迪熊和玩具火车共$38 + $46 = $84，这占总钱数的3/5。"
          },
          {
            "title": "求剩余的钱",
            "text": "总钱数是$84 ÷ 3 × 5 = $140，所以剩下$140 − $84 = $56。"
          },
          {
            "title": "求每本书的价钱",
            "text": "$56买5本相同的书，所以每本是$56 ÷ 5 = $11.20。"
          }
        ],
        "answerCheck": "答案：每本$11.20。"
      }
    }
  },
  {
    "id": 42,
    "topic": "Fractions",
    "question": "Jeff sold 120 oranges on Friday. He sold 100 fewer oranges on Friday than on Saturday. The number of oranges he sold on Sunday was 3 times the number he sold on Friday. If he had 2/7 of the oranges left, how many oranges did he have at 1st?",
    "answer": "980 oranges",
    "model": "fraction-of-remainder",
    "hint": "Find sales for Friday, Saturday, and Sunday 1st. These sales make up 5/7 of the original number.",
    "questionZh": "杰夫星期五卖出120个橙子。他星期五比星期六少卖100个橙子。星期日卖出的橙子数量是星期五的3倍。若他还剩原来橙子的2/7，他开始时有多少个橙子？",
    "hintZh": "先求星期五、星期六和星期日各卖出的数量。这些卖出的橙子占原来总数的5/7。",
    "solution": {
      "en": {
        "strategy": "Find the sales on all three days. Those sales are 5/7 of the starting oranges because 2/7 remained.",
        "steps": [
          {
            "title": "Find each day's sales",
            "text": "Friday sales were 120. Saturday sales were 120 + 100 = 220. Sunday sales were 3 × 120 = 360."
          },
          {
            "title": "Find total sales",
            "text": "He sold 120 + 220 + 360 = 700 oranges in all. Since 2/7 remained, the 700 sold were 5/7 of the original amount."
          },
          {
            "title": "Find the starting number",
            "text": "The original number was 700 ÷ 5 × 7 = 980 oranges."
          }
        ],
        "answerCheck": "Answer: 980 oranges."
      },
      "zh-Hans": {
        "strategy": "先求三天各卖出的橙子数。因为剩下2/7，所以卖出的数量是原数的5/7。",
        "steps": [
          {
            "title": "求每天的销售量",
            "text": "星期五卖120个；星期六卖120 + 100 = 220个；星期日卖3 × 120 = 360个。"
          },
          {
            "title": "求卖出的总数",
            "text": "三天共卖120 + 220 + 360 = 700个橙子。剩下2/7，因此卖出的700个是原数的5/7。"
          },
          {
            "title": "求原有橙子数",
            "text": "原来有700 ÷ 5 × 7 = 980个橙子。"
          }
        ],
        "answerCheck": "答案：980个橙子。"
      }
    }
  },
  {
    "id": 43,
    "topic": "Fractions",
    "question": "There were 120 more eggs in box A than in box B. There were 2/3 as many eggs in box C as in box B. When 1/2 of the eggs in box B were sold, there were 222 eggs left in box B. How many eggs were there altogether?",
    "answer": "1304 eggs",
    "model": "unit-bar",
    "hint": "Double the 222 eggs to find box B before any were sold. Use that to calculate boxes A and C.",
    "questionZh": "A盒比B盒多120个鸡蛋。C盒的鸡蛋数量是B盒的2/3。当B盒鸡蛋卖出1/2后，B盒剩222个鸡蛋。3个盒子原来一共有多少个鸡蛋？",
    "hintZh": "把222个鸡蛋乘以2，求出卖出前B盒的数量。再利用它计算A盒和C盒。",
    "solution": {
      "en": {
        "strategy": "Double the remaining eggs to find box B before selling, then calculate boxes A and C from B.",
        "steps": [
          {
            "title": "Find box B originally",
            "text": "After half of box B was sold, 222 eggs remained. Therefore box B originally held 222 × 2 = 444 eggs."
          },
          {
            "title": "Find boxes A and C",
            "text": "Box A had 444 + 120 = 564 eggs. Box C had 2/3 × 444 = 296 eggs."
          },
          {
            "title": "Find the total",
            "text": "The three boxes contained 564 + 444 + 296 = 1304 eggs altogether."
          }
        ],
        "answerCheck": "Answer: 1304 eggs."
      },
      "zh-Hans": {
        "strategy": "把B盒剩下的鸡蛋数加倍，求出卖出前B盒的数量，再据此求A盒和C盒。",
        "steps": [
          {
            "title": "求B盒原有数量",
            "text": "卖出B盒的一半后还剩222个，所以B盒原来有222 × 2 = 444个鸡蛋。"
          },
          {
            "title": "求A盒和C盒数量",
            "text": "A盒有444 + 120 = 564个。C盒有2/3 × 444 = 296个。"
          },
          {
            "title": "求三盒总数",
            "text": "三盒原来共有564 + 444 + 296 = 1304个鸡蛋。"
          }
        ],
        "answerCheck": "答案：1304个鸡蛋。"
      }
    }
  },
  {
    "id": 44,
    "topic": "Fractions",
    "question": "Alfred had 72 mugs. He sold some of them for $144. He then had 7/8 of the mugs left. How much would he get if he had sold all the mugs?",
    "answer": "$1152",
    "model": "fraction-of-remainder",
    "hint": "Find how many mugs were sold from the 1/8 part. That gives the selling price of 1 mug.",
    "questionZh": "阿尔弗雷德有72个杯子。他卖出一些，得到$144，之后还剩原来杯子的7/8。如果他把所有杯子都卖出，可以得到多少钱？",
    "hintZh": "由1/8求出卖出的杯子数，从而得到1个杯子的售价。",
    "solution": {
      "en": {
        "strategy": "The fraction sold is the part not left. Use it to find how many mugs sold and then the price per mug.",
        "steps": [
          {
            "title": "Find the mugs sold",
            "text": "Since 7/8 were left, 1/8 were sold. Mugs sold = 1/8 × 72 = 9."
          },
          {
            "title": "Find the price per mug",
            "text": "Nine mugs brought in $144, so one mug cost $144 ÷ 9 = $16."
          },
          {
            "title": "Find the value of all mugs",
            "text": "Selling all 72 mugs would bring 72 × $16 = $1152."
          }
        ],
        "answerCheck": "Answer: $1152."
      },
      "zh-Hans": {
        "strategy": "卖出的部分是未剩下的部分。先求卖出多少个杯子，再求每个杯子的售价。",
        "steps": [
          {
            "title": "求卖出的杯子数",
            "text": "剩下7/8，说明卖出1/8。卖出杯子数 = 1/8 × 72 = 9个。"
          },
          {
            "title": "求每个杯子的售价",
            "text": "9个杯子卖得$144，所以每个售价为$144 ÷ 9 = $16。"
          },
          {
            "title": "求全部杯子的总价",
            "text": "72个杯子全卖出可得72 × $16 = $1152。"
          }
        ],
        "answerCheck": "答案：$1152。"
      }
    }
  },
  {
    "id": 45,
    "topic": "Fractions",
    "question": "There were some chicken wings and fishballs in a pack. After 2/7 of the chicken wings were taken out from the pack, there were 3/10 as many chicken wings as fishballs in the pack. If there were 50 fishballs, how many chicken wings were there in the pack at 1st?",
    "answer": "21 chicken wings",
    "model": "fraction-of-remainder",
    "hint": "Use 3/10 of 50 to find the wings left after removal. That is 5/7 of the original number of wings.",
    "questionZh": "一包里有一些鸡翅和鱼丸。取出鸡翅的2/7后，包里的鸡翅数量是鱼丸数量的3/10。若有50个鱼丸，开始时包里有多少个鸡翅？",
    "hintZh": "用50的3/10求取出后剩下的鸡翅数。这是原来鸡翅数的5/7。",
    "solution": {
      "en": {
        "strategy": "Use the fishballs to find the wings left after removal, then scale from the remaining 5/7 back to the original number.",
        "steps": [
          {
            "title": "Find the wings left",
            "text": "The remaining chicken wings were 3/10 as many as 50 fishballs: 3/10 × 50 = 15 wings."
          },
          {
            "title": "Relate the remainder to the original",
            "text": "After 2/7 were taken out, 1 − 2/7 = 5/7 of the chicken wings remained. Thus 15 wings represent 5/7 of the original number."
          },
          {
            "title": "Find the original wings",
            "text": "The original number was 15 ÷ 5 × 7 = 21 chicken wings."
          }
        ],
        "answerCheck": "Answer: 21 chicken wings."
      },
      "zh-Hans": {
        "strategy": "先由鱼丸数求取出后剩下的鸡翅数，再由剩下的5/7倒推原有数量。",
        "steps": [
          {
            "title": "求剩下的鸡翅数",
            "text": "剩下的鸡翅数是50个鱼丸的3/10，即3/10 × 50 = 15个。"
          },
          {
            "title": "把剩余数对应到原数",
            "text": "取出2/7后还剩1 − 2/7 = 5/7，所以15个鸡翅是原来数量的5/7。"
          },
          {
            "title": "求原有鸡翅数",
            "text": "原来有15 ÷ 5 × 7 = 21个鸡翅。"
          }
        ],
        "answerCheck": "答案：21个鸡翅。"
      }
    }
  },
  {
    "id": 46,
    "topic": "Fractions",
    "question": "There were 1/2 as many yellow T-shirts as blue T-shirts in a box and 15 more green T-shirts than blue T-shirts. There were 27 yellow T-shirts. How many T-shirts were left in the box when 4/5 of the T-shirts were taken out?",
    "answer": "30 T-shirts",
    "model": "fraction-of-remainder",
    "hint": "Find blue and green T-shirts from the 27 yellow T-shirts. Then take the remaining 1/5 of the total.",
    "questionZh": "一个盒子里黄色T恤的数量是蓝色T恤的1/2，绿色T恤比蓝色T恤多15件。若有27件黄色T恤，取走所有T恤的4/5后，盒子里还剩多少件T恤？",
    "hintZh": "由27件黄色T恤求蓝色和绿色T恤的数量，再求总数的剩余1/5。",
    "solution": {
      "en": {
        "strategy": "Find the blue and green T-shirts from the yellow count, add all colours, then take the remaining 1/5.",
        "steps": [
          {
            "title": "Find blue and green T-shirts",
            "text": "Yellow is half of blue, so blue = 27 × 2 = 54. Green = 54 + 15 = 69."
          },
          {
            "title": "Find the total number",
            "text": "The box originally had 27 + 54 + 69 = 150 T-shirts."
          },
          {
            "title": "Find the number left",
            "text": "When 4/5 were taken out, 1/5 remained. Thus 1/5 × 150 = 30 T-shirts were left."
          }
        ],
        "answerCheck": "Answer: 30 T-shirts."
      },
      "zh-Hans": {
        "strategy": "由黄色T恤数求蓝色和绿色T恤数，得到总数后取剩下的1/5。",
        "steps": [
          {
            "title": "求蓝色和绿色T恤数",
            "text": "黄色是蓝色的1/2，所以蓝色有27 × 2 = 54件。绿色有54 + 15 = 69件。"
          },
          {
            "title": "求T恤总数",
            "text": "原来共有27 + 54 + 69 = 150件T恤。"
          },
          {
            "title": "求剩下的数量",
            "text": "取走4/5后剩1/5，所以剩下1/5 × 150 = 30件T恤。"
          }
        ],
        "answerCheck": "答案：30件T恤。"
      }
    }
  },
  {
    "id": 47,
    "topic": "Fractions",
    "question": "There were some pears in boxes A and B. When 1/3 of the pears were taken out from box A and 5/9 of the pears were taken out from box B, there was an equal number of pears in both boxes. If 84 pears were taken out, how many pears were there in both boxes at 1st?",
    "answer": "180 pears",
    "model": "bar-change",
    "hint": "Draw bars for the original quantities so that their remaining parts are equal. The removed parts total 84.",
    "questionZh": "A盒和B盒中有一些梨。从A盒取出梨的1/3，从B盒取出梨的5/9后，两盒的梨数相等。若共取出84个梨，开始时两盒共有多少个梨？",
    "hintZh": "画出原有数量的条形图，使两盒剩余部分相等。取出的部分合计84个。",
    "solution": {
      "en": {
        "strategy": "Represent the equal number left in each box by one common amount, then use the 84 removed pears to find that amount.",
        "steps": [
          {
            "title": "Express each box using the common remainder",
            "text": "Let the equal number left in each box be R pears. Since 2/3 of box A remains, box A originally had 3R/2 and A had R/2 removed. Since 4/9 of box B remains, box B originally had 9R/4 and B had 5R/4 removed."
          },
          {
            "title": "Use the removed pears",
            "text": "The removed pears total R/2 + 5R/4 = 7R/4 = 84. Therefore R = 84 × 4 ÷ 7 = 48."
          },
          {
            "title": "Find the starting total",
            "text": "Initially, boxes A and B had 3R/2 + 9R/4 = 3 × 48/2 + 9 × 48/4 = 72 + 108 = 180 pears."
          }
        ],
        "answerCheck": "Answer: 180 pears."
      },
      "zh-Hans": {
        "strategy": "把两盒取出后相等的梨数设为同一个量，再利用取出的84个梨求这个量。",
        "steps": [
          {
            "title": "用共同的剩余量表示两盒",
            "text": "设两盒各剩R个梨。A盒剩原来的2/3，所以A盒原来有3R/2个，取出了R/2个。B盒剩原来的4/9，所以B盒原来有9R/4个，取出了5R/4个。"
          },
          {
            "title": "利用取出的梨数",
            "text": "取出的梨共R/2 + 5R/4 = 7R/4 = 84，所以R = 84 × 4 ÷ 7 = 48。"
          },
          {
            "title": "求开始时的总数",
            "text": "开始时共有3R/2 + 9R/4 = 3 × 48/2 + 9 × 48/4 = 72 + 108 = 180个梨。"
          }
        ],
        "answerCheck": "答案：180个梨。"
      }
    }
  },
  {
    "id": 48,
    "topic": "Fractions",
    "question": "Agnes had a total of 135 balloons. There were 3 times as many red balloons as green balloons, 2 times as many blue balloons as green balloons and some purple balloons. When 12 green balloons burst, there were 1/3 as many green as purple balloons left. Find the total number of purple and green balloons Agnes had at 1st.",
    "answer": "40 purple and green balloons",
    "model": "bar-change",
    "hint": "Let green balloons be 1 unit. After 12 burst, use the 1:3 relation between remaining green and purple.",
    "questionZh": "阿格妮丝共有135个气球。红气球数量是绿气球的3倍，蓝气球数量是绿气球的2倍，还有一些紫气球。12个绿气球爆掉后，剩下的绿气球数量是紫气球数量的1/3。求阿格妮丝开始时紫气球和绿气球的总数。",
    "hintZh": "把绿气球设为1份。12个爆掉后，利用剩下绿气球与紫气球的1:3关系。",
    "solution": {
      "en": {
        "strategy": "Let the number of green balloons be a variable. Express red, blue, and purple balloons in terms of it, then use the total.",
        "steps": [
          {
            "title": "Set up the balloon relationships",
            "text": "Let the original number of green balloons be g. Then red balloons = 3g and blue balloons = 2g. After 12 green balloons burst, g − 12 was 1/3 of the purple balloons, so purple balloons = 3(g − 12)."
          },
          {
            "title": "Use the total of 135",
            "text": "The total gives g + 3g + 2g + 3(g − 12) = 135. Thus 9g − 36 = 135, so 9g = 171 and g = 19."
          },
          {
            "title": "Find green plus purple",
            "text": "Purple balloons = 3(19 − 12) = 21. Therefore the original green and purple balloons totaled 19 + 21 = 40."
          }
        ],
        "answerCheck": "Answer: 40 purple and green balloons."
      },
      "zh-Hans": {
        "strategy": "设原来绿色气球数为未知数，用它表示红、蓝、紫气球数，再利用总数求解。",
        "steps": [
          {
            "title": "建立气球数量关系",
            "text": "设原来有g个绿色气球，则红色有3g个，蓝色有2g个。爆掉12个绿色气球后，g − 12是紫色气球数的1/3，所以紫色有3(g − 12)个。"
          },
          {
            "title": "利用总数135",
            "text": "总数给出g + 3g + 2g + 3(g − 12) = 135。即9g − 36 = 135，所以9g = 171，g = 19。"
          },
          {
            "title": "求绿色和紫色气球总数",
            "text": "紫色气球有3(19 − 12) = 21个。因此原来绿色和紫色气球共有19 + 21 = 40个。"
          }
        ],
        "answerCheck": "答案：紫色和绿色气球共40个。"
      }
    }
  },
  {
    "id": 49,
    "topic": "Money",
    "question": "Michael paid $14 for 3 similar mangoes and a durian. The durian cost $2 more than each mango. What was the total cost of 5 mangoes and 4 durians?",
    "answer": "$35",
    "model": "money-units",
    "hint": "Replace the durian with the cost of a mango plus $2, then find the price of 1 mango.",
    "questionZh": "迈克尔买3个相同的芒果和1个榴莲共付$14。榴莲比每个芒果贵$2。5个芒果和4个榴莲共多少钱？",
    "hintZh": "把榴莲的价格替换为1个芒果的价格加$2，再求1个芒果的价格。",
    "solution": {
      "en": {
        "strategy": "Write the durian price as one mango price plus $2, solve for a mango, then calculate the requested purchase.",
        "steps": [
          {
            "title": "Find the price of one mango",
            "text": "Let one mango cost $m. One durian costs $(m + 2), so 3m + (m + 2) = 14. Hence 4m = 12 and m = 3."
          },
          {
            "title": "Find the durian price",
            "text": "A durian costs $3 + $2 = $5."
          },
          {
            "title": "Calculate the new purchase",
            "text": "Five mangoes and four durians cost 5 × $3 + 4 × $5 = $15 + $20 = $35."
          }
        ],
        "answerCheck": "Answer: $35."
      },
      "zh-Hans": {
        "strategy": "把榴莲价格表示为一个芒果的价格加$2，先求芒果单价，再计算所求购买总价。",
        "steps": [
          {
            "title": "求一个芒果的价格",
            "text": "设一个芒果为$m，一颗榴莲为$(m + 2)。则3m + (m + 2) = 14，所以4m = 12，m = 3。"
          },
          {
            "title": "求榴莲价格",
            "text": "一颗榴莲的价格是$3 + $2 = $5。"
          },
          {
            "title": "计算所求总价",
            "text": "5个芒果和4颗榴莲的价格 = 5 × $3 + 4 × $5 = $15 + $20 = $35。"
          }
        ],
        "answerCheck": "答案：$35。"
      }
    }
  },
  {
    "id": 50,
    "topic": "Money",
    "question": "A blouse costs 1/2 as much as a shirt. If the total cost of 3 similar blouses and a shirt is $200, what is the cost of 7 blouses and 4 shirts?",
    "answer": "$600",
    "model": "money-units",
    "hint": "Use 1 blouse as 1 unit and 1 shirt as 2 units. Convert both purchases into units.",
    "questionZh": "一件女式上衣的价格是一件衬衫的1/2。若3件相同的女式上衣和1件衬衫共$200，7件女式上衣和4件衬衫共多少钱？",
    "hintZh": "把1件女式上衣设为1份，1件衬衫设为2份。把两次购买都换算成份数。",
    "solution": {
      "en": {
        "strategy": "Use one blouse as one unit and one shirt as two units. Determine the value of a unit from the first purchase.",
        "steps": [
          {
            "title": "Set the unit relationship",
            "text": "Let one blouse be 1 unit. Since a blouse costs half as much as a shirt, one shirt is 2 units."
          },
          {
            "title": "Find each unit's value",
            "text": "Three blouses and one shirt make 3 × 1 + 2 = 5 units, worth $200. Thus 1 unit is $200 ÷ 5 = $40."
          },
          {
            "title": "Calculate the requested cost",
            "text": "Seven blouses and four shirts make 7 × 1 + 4 × 2 = 15 units. Their cost is 15 × $40 = $600."
          }
        ],
        "answerCheck": "Answer: $600."
      },
      "zh-Hans": {
        "strategy": "把一件女式上衣看作1份，一件衬衫看作2份。由第一次购买求每份的价钱。",
        "steps": [
          {
            "title": "建立份数关系",
            "text": "设一件女式上衣为1份。女式上衣价格是衬衫的1/2，所以一件衬衫是2份。"
          },
          {
            "title": "求每份的价钱",
            "text": "3件女式上衣和1件衬衫共3 × 1 + 2 = 5份，价值$200。因此1份是$200 ÷ 5 = $40。"
          },
          {
            "title": "计算所求总价",
            "text": "7件女式上衣和4件衬衫共7 × 1 + 4 × 2 = 15份，价格是15 × $40 = $600。"
          }
        ],
        "answerCheck": "答案：$600。"
      }
    }
  },
  {
    "id": 51,
    "topic": "Money",
    "question": "Colin paid $12 for 4 buns and 4 cakes. 3 buns cost as much as 2 cakes. What was the total cost of 6 buns and 9 cakes?",
    "answer": "$23.40",
    "model": "money-units",
    "hint": "Represent a bun and cake with equal units using 3 buns = 2 cakes, then use the $12 total.",
    "questionZh": "科林买4个面包和4块蛋糕共付$12。3个面包的价钱等于2块蛋糕的价钱。6个面包和9块蛋糕共多少钱？",
    "hintZh": "利用3个面包 = 2块蛋糕，把面包和蛋糕用相同的份数表示，再利用总价$12。",
    "solution": {
      "en": {
        "strategy": "Use equal price units from 3 buns = 2 cakes, find one unit's value from the $12 purchase, then price the requested items.",
        "steps": [
          {
            "title": "Set equal cost units",
            "text": "Since 3 buns cost as much as 2 cakes, let one bun be 2 units and one cake be 3 units. Then 3 buns and 2 cakes each cost 6 units."
          },
          {
            "title": "Find the value of one unit",
            "text": "Four buns and four cakes cost 4 × 2 + 4 × 3 = 20 units, and this is $12. Thus 1 unit costs $12 ÷ 20 = $0.60."
          },
          {
            "title": "Calculate the requested cost",
            "text": "Six buns and nine cakes cost 6 × 2 + 9 × 3 = 39 units. Therefore the cost is 39 × $0.60 = $23.40."
          }
        ],
        "answerCheck": "Answer: $23.40."
      },
      "zh-Hans": {
        "strategy": "由3个面包和2块蛋糕等价设相同的价格份数，利用$12求每份价钱，再计算所求总价。",
        "steps": [
          {
            "title": "建立等价份数",
            "text": "3个面包和2块蛋糕同价，可设一个面包为2份、一块蛋糕为3份。这样3个面包和2块蛋糕都是6份。"
          },
          {
            "title": "求每份的价钱",
            "text": "4个面包和4块蛋糕共4 × 2 + 4 × 3 = 20份，价钱是$12。因此1份是$12 ÷ 20 = $0.60。"
          },
          {
            "title": "计算所求总价",
            "text": "6个面包和9块蛋糕共6 × 2 + 9 × 3 = 39份，所以总价是39 × $0.60 = $23.40。"
          }
        ],
        "answerCheck": "答案：$23.40。"
      }
    }
  },
  {
    "id": 52,
    "topic": "Money",
    "question": "The total cost of a radio, a clock and a blender is $215. The radio costs $35 more than the blender. The blender costs $45 more than the clock. What is the cost of the radio?",
    "answer": "$110",
    "model": "money-units",
    "hint": "Treat the clock as a base amount. Write the blender and radio as that amount plus their stated differences.",
    "questionZh": "一台收音机、一座时钟和一台搅拌机的总价是$215。收音机比搅拌机贵$35，搅拌机比时钟贵$45。收音机多少钱？",
    "hintZh": "把时钟的价格看作基准金额，把搅拌机和收音机写成这个金额加上题中给出的差额。",
    "solution": {
      "en": {
        "strategy": "Use the clock price as the common base amount, then add the stated differences.",
        "steps": [
          {
            "title": "Express each price from the clock",
            "text": "Let the clock cost $x. The blender costs $x + $45, and the radio costs $x + $45 + $35 = $x + $80."
          },
          {
            "title": "Use the total cost",
            "text": "Clock + blender + radio gives $x + ($x + $45) + ($x + $80) = $215. Thus 3$x + $125 = $215."
          },
          {
            "title": "Find the radio price",
            "text": "3$x = $215 − $125 = $90, so the clock costs $30. The radio costs $30 + $80 = $110."
          }
        ],
        "answerCheck": "Clock $30, blender $75, and radio $110 give $30 + $75 + $110 = $215. The radio costs $110."
      },
      "zh-Hans": {
        "strategy": "把时钟的价钱设为基准金额，再加上题目给出的差额。",
        "steps": [
          {
            "title": "用时钟价格表示各物品价格",
            "text": "设时钟价格为$x。搅拌机价格为$x + $45，收音机价格为$x + $45 + $35 = $x + $80。"
          },
          {
            "title": "利用总价列式",
            "text": "时钟、搅拌机和收音机的总价为$x + ($x + $45) + ($x + $80) = $215，所以3$x + $125 = $215。"
          },
          {
            "title": "求收音机价格",
            "text": "3$x = $215 − $125 = $90，所以时钟是$30。收音机是$30 + $80 = $110。"
          }
        ],
        "answerCheck": "时钟$30、搅拌机$75、收音机$110，且$30 + $75 + $110 = $215。因此收音机价格是$110。"
      }
    }
  },
  {
    "id": 53,
    "topic": "Money",
    "question": "Betty had 2 times as much money as Johnson. After Betty spent $350, she had $25 less than Johnson. Find the total amount of money they had at 1st.",
    "answer": "$975",
    "model": "bar-change",
    "hint": "After Betty spends $350, compare her amount with Johnson's unchanged amount to find Johnson's money.",
    "questionZh": "贝蒂的钱是约翰逊的2倍。贝蒂花掉$350后，她的钱比约翰逊少$25。求他们开始时的钱总数。",
    "hintZh": "贝蒂花掉$350后，将她的钱与约翰逊未变的钱比较，求出约翰逊的钱。",
    "solution": {
      "en": {
        "strategy": "Compare Betty's original double amount with Johnson's unchanged amount after Betty spends money.",
        "steps": [
          {
            "title": "Represent their original amounts",
            "text": "Let Johnson have $x at 1st. Betty then has 2$x."
          },
          {
            "title": "Use the amount after spending",
            "text": "After spending $350, Betty has 2$x − $350. This is $25 less than Johnson's $x, so 2$x − $350 = $x − $25."
          },
          {
            "title": "Find the total",
            "text": "Subtract $x from both sides: $x = $325. Betty had 2 × $325 = $650, so together they had $325 + $650 = $975."
          }
        ],
        "answerCheck": "After Betty spends $350, she has $650 − $350 = $300, which is $25 less than Johnson's $325. Their original total was $975."
      },
      "zh-Hans": {
        "strategy": "比较贝蒂原来是2倍的钱数与约翰逊不变的钱数，并利用贝蒂花钱后的关系。",
        "steps": [
          {
            "title": "表示开始时的钱数",
            "text": "设约翰逊开始时有$x，贝蒂开始时就有2$x。"
          },
          {
            "title": "利用花钱后的关系",
            "text": "贝蒂花掉$350后有2$x − $350，这比约翰逊的$x少$25，所以2$x − $350 = $x − $25。"
          },
          {
            "title": "求两人的总钱数",
            "text": "两边减去$x，得$x = $325。贝蒂有2 × $325 = $650，因此开始时总数是$325 + $650 = $975。"
          }
        ],
        "answerCheck": "贝蒂花钱后有$650 − $350 = $300，正好比约翰逊的$325少$25。开始时两人共有$975。"
      }
    }
  },
  {
    "id": 54,
    "topic": "Money",
    "question": "Connie and Alice had an equal amount of money at 1st. Connie gave Alice $126 and Alice had 4 times as much money as Connie in the end. How much money did Connie have at 1st?",
    "answer": "$210",
    "model": "bar-change",
    "hint": "The $126 transfer creates a difference between the final amounts. Model the final 4:1 ratio.",
    "questionZh": "康妮和爱丽丝开始时的钱一样多。康妮给爱丽丝$126后，最后爱丽丝的钱是康妮的4倍。康妮开始时有多少钱？",
    "hintZh": "转移$126使最后金额产生差距。把最后的金额按4:1比例表示。",
    "solution": {
      "en": {
        "strategy": "Use the $126 transfer to express the final amounts, then apply the final 4:1 ratio.",
        "steps": [
          {
            "title": "Represent the equal starting amounts",
            "text": "Let each girl have $x at 1st. After Connie gives Alice $126, Connie has $x − $126 and Alice has $x + $126."
          },
          {
            "title": "Apply the final ratio",
            "text": "Alice has 4 times Connie's amount, so $x + $126 = 4($x − $126)."
          },
          {
            "title": "Solve for Connie's starting money",
            "text": "Expand: $x + $126 = 4$x − $504. Therefore $630 = 3$x and $x = $210."
          }
        ],
        "answerCheck": "Connie ends with $210 − $126 = $84 and Alice ends with $210 + $126 = $336. Since $336 = 4 × $84, Connie had $210 at 1st."
      },
      "zh-Hans": {
        "strategy": "把$126的转移写入两人最后的钱数，再使用最后4:1的比例。",
        "steps": [
          {
            "title": "表示相同的开始金额",
            "text": "设两人开始时各有$x。康妮给爱丽丝$126后，康妮有$x − $126，爱丽丝有$x + $126。"
          },
          {
            "title": "利用最后的比例",
            "text": "爱丽丝的钱是康妮的4倍，所以$x + $126 = 4($x − $126)。"
          },
          {
            "title": "求康妮开始时的钱",
            "text": "展开后得$x + $126 = 4$x − $504，所以$630 = 3$x，$x = $210。"
          }
        ],
        "answerCheck": "康妮最后有$210 − $126 = $84，爱丽丝最后有$210 + $126 = $336，而$336 = 4 × $84。因此康妮开始时有$210。"
      }
    }
  },
  {
    "id": 55,
    "topic": "Money",
    "question": "Terence and Winnie had a total of 27 coins. When Terence gave Winnie 1/4 of his coins, she had 2 times as many coins as him. Winnie then found out that she had 2 times as many 20-cent coins as 10-cent coins. How much money did she have in the end?",
    "answer": "$3",
    "model": "bar-change",
    "hint": "1st find Winnie's final number of coins using the transfer and total of 27. Then split them in the 2:1 ratio of 20-cent to 10-cent coins.",
    "questionZh": "特伦斯和温妮共有27枚硬币。特伦斯把自己硬币的1/4给温妮后，她的硬币数量是他的2倍。温妮随后发现，她的20分硬币数量是10分硬币的2倍。她最后有多少钱？",
    "hintZh": "先利用转移和总数27求温妮最后的硬币数，再按20分硬币与10分硬币2:1的比例分配。",
    "solution": {
      "en": {
        "strategy": "Find Winnie's final number of coins from the 2:1 coin-number ratio, then split her coins by denomination.",
        "steps": [
          {
            "title": "Find the final coin numbers",
            "text": "The total remains 27 coins. After the transfer, Winnie has twice as many coins as Terence, so their final numbers are in the ratio 2:1. Each part is 27 ÷ 3 = 9 coins; Winnie has 2 × 9 = 18 coins."
          },
          {
            "title": "Split Winnie's coins by type",
            "text": "Winnie's 20-cent coins and 10-cent coins are in the ratio 2:1. Split 18 coins into 3 parts: 1 part is 18 ÷ 3 = 6 coins. She has 12 twenty-cent coins and 6 ten-cent coins."
          },
          {
            "title": "Find the value",
            "text": "The 12 twenty-cent coins are worth 12 × $0.20 = $2.40. The 6 ten-cent coins are worth 6 × $0.10 = $0.60."
          }
        ],
        "answerCheck": "$2.40 + $0.60 = $3, so Winnie had $3 in the end."
      },
      "zh-Hans": {
        "strategy": "先由最后2:1的硬币数量关系求温妮的硬币总数，再按币值种类的2:1比例分配。",
        "steps": [
          {
            "title": "求最后各自的硬币数",
            "text": "硬币总数仍是27枚。转移后温妮的硬币数是特伦斯的2倍，比例为2:1。每份是27 ÷ 3 = 9枚，所以温妮有2 × 9 = 18枚。"
          },
          {
            "title": "按币值分配温妮的硬币",
            "text": "温妮的20分硬币与10分硬币数量比为2:1。18枚分成3份，每份是18 ÷ 3 = 6枚，因此有12枚20分硬币和6枚10分硬币。"
          },
          {
            "title": "计算钱数",
            "text": "12枚20分硬币值12 × $0.20 = $2.40；6枚10分硬币值6 × $0.10 = $0.60。"
          }
        ],
        "answerCheck": "$2.40 + $0.60 = $3，所以温妮最后有$3。"
      }
    }
  },
  {
    "id": 56,
    "topic": "Money",
    "question": "Hazel had enough money to buy 25 chocolate cookies. Each chocolate cookie cost as much as 2 butter cookies. Hazel borrowed another $6 from her mother to buy 20 chocolate cookies and 20 butter cookies. How much money did Hazel have at 1st?",
    "answer": "$30",
    "model": "money-units",
    "hint": "Convert 20 butter cookies into an equivalent number of chocolate cookies and compare the 2 purchases.",
    "questionZh": "黑兹尔的钱刚好可以买25块巧克力饼干。每块巧克力饼干的价钱等于2块黄油饼干的价钱。她向母亲借了$6后，买20块巧克力饼干和20块黄油饼干。黑兹尔开始时有多少钱？",
    "hintZh": "每1块巧克力饼干相当于2块黄油饼干。把20块黄油饼干换算成等价数量的巧克力饼干，比较2次购买。",
    "solution": {
      "en": {
        "strategy": "Measure both purchases in chocolate-cookie price units.",
        "steps": [
          {
            "title": "Convert butter cookies",
            "text": "One chocolate cookie costs as much as 2 butter cookies. Therefore, 20 butter cookies cost the same as 20 ÷ 2 = 10 chocolate cookies."
          },
          {
            "title": "Compare the two amounts of money",
            "text": "The later purchase of 20 chocolate cookies and 20 butter cookies costs the same as 20 + 10 = 30 chocolate cookies. Hazel originally had the cost of 25 chocolate cookies, so the difference is the cost of 5 chocolate cookies."
          },
          {
            "title": "Find Hazel's original money",
            "text": "The extra 5 chocolate-cookie prices equal the $6 borrowed. Thus one chocolate cookie costs $6 ÷ 5 = $1.20, and 25 cost 25 × $1.20 = $30."
          }
        ],
        "answerCheck": "25 chocolate cookies cost $30. Adding the $6 borrowed gives $36, which pays for 30 chocolate-cookie price units at $1.20 each. Hazel had $30 at 1st."
      },
      "zh-Hans": {
        "strategy": "把两次购买都换算成巧克力饼干的价钱单位。",
        "steps": [
          {
            "title": "换算黄油饼干",
            "text": "1块巧克力饼干和2块黄油饼干价钱相同，所以20块黄油饼干相当于20 ÷ 2 = 10块巧克力饼干的价钱。"
          },
          {
            "title": "比较两次可购买的数量",
            "text": "后一次买20块巧克力饼干和20块黄油饼干，相当于20 + 10 = 30块巧克力饼干的价钱。开始时的钱能买25块，两者相差5块巧克力饼干的价钱。"
          },
          {
            "title": "求开始时的钱数",
            "text": "多出的5块巧克力饼干价钱就是借来的$6，所以每块巧克力饼干是$6 ÷ 5 = $1.20。开始时的钱是25 × $1.20 = $30。"
          }
        ],
        "answerCheck": "25块巧克力饼干值$30。加上借来的$6共有$36，正好能买30个每个$1.20的巧克力饼干价钱单位。因此开始时有$30。"
      }
    }
  },
  {
    "id": 57,
    "topic": "Money",
    "question": "A book costs 3 times as much as a pen. 5 similar pens cost as much as a photo frame. If 3 similar photo frames cost $74.25, what is the total cost of a book, a pen and a photo frame?",
    "answer": "$44.55",
    "model": "money-units",
    "hint": "Express a pen, book, and photo frame in 1 common unit before using the cost of 3 photo frames.",
    "questionZh": "一本书的价格是一支笔的3倍。5支相同的笔的价格等于一个相框。若3个相同的相框共$74.25，一本书、一支笔和一个相框的总价是多少？",
    "hintZh": "先把一支笔、一本书和一个相框都用1个共同单位表示，再利用3个相框的价钱。",
    "solution": {
      "en": {
        "strategy": "Find the photo-frame price first, then use its links to the pen and book prices.",
        "steps": [
          {
            "title": "Find one photo frame",
            "text": "3 similar photo frames cost $74.25, so 1 photo frame costs $74.25 ÷ 3 = $24.75."
          },
          {
            "title": "Find the pen and book prices",
            "text": "5 pens cost as much as 1 photo frame, so a pen costs $24.75 ÷ 5 = $4.95. A book costs 3 times a pen, so it costs 3 × $4.95 = $14.85."
          },
          {
            "title": "Add the three items",
            "text": "Book + pen + photo frame costs $14.85 + $4.95 + $24.75."
          }
        ],
        "answerCheck": "$14.85 + $4.95 + $24.75 = $44.55, so the total cost is $44.55."
      },
      "zh-Hans": {
        "strategy": "先求1个相框的价钱，再利用相框、笔和书之间的价钱关系。",
        "steps": [
          {
            "title": "求1个相框的价钱",
            "text": "3个相同的相框共$74.25，所以1个相框是$74.25 ÷ 3 = $24.75。"
          },
          {
            "title": "求笔和书的价钱",
            "text": "5支笔和1个相框同价，所以1支笔是$24.75 ÷ 5 = $4.95。一本书是1支笔的3倍，即3 × $4.95 = $14.85。"
          },
          {
            "title": "把三件物品相加",
            "text": "一本书、一支笔和一个相框共$14.85 + $4.95 + $24.75。"
          }
        ],
        "answerCheck": "$14.85 + $4.95 + $24.75 = $44.55，所以总价是$44.55。"
      }
    }
  },
  {
    "id": 58,
    "topic": "Money",
    "question": "For every T-shirt that Joel sells, he will receive $12. He will receive another $5 for every set of 10 T-shirts he sells. If he sells 100 T-shirts, he will receive an additional $50 bonus. How many T-shirts does Joel have to sell to receive $1372 in total?",
    "answer": "106 T-shirts",
    "model": "money-units",
    "hint": "1st calculate Joel's earnings for 100 T-shirts, including the 10 set bonuses and the $50 bonus.",
    "questionZh": "乔尔每卖出1件T恤可得$12。每卖出10件T恤，他还可额外得到$5。若卖出100件T恤，他可额外得到$50奖金。乔尔要卖出多少件T恤才能共得到$1372？",
    "hintZh": "先计算乔尔卖出100件T恤的收入，包括10次每组奖金和$50奖金。",
    "solution": {
      "en": {
        "strategy": "Calculate the guaranteed earnings at 100 T-shirts, then add the earnings from further T-shirts.",
        "steps": [
          {
            "title": "Find earnings for 100 T-shirts",
            "text": "The per-shirt pay is 100 × $12 = $1200. There are 100 ÷ 10 = 10 set bonuses, worth 10 × $5 = $50, plus the $50 bonus for selling 100 T-shirts."
          },
          {
            "title": "Compare with the target",
            "text": "For 100 T-shirts, Joel earns $1200 + $50 + $50 = $1300. He needs $1372 − $1300 = $72 more."
          },
          {
            "title": "Find the additional T-shirts",
            "text": "After 100, each additional T-shirt earns $12 until another full set of 10 is reached. $72 ÷ $12 = 6, so Joel needs 100 + 6 = 106 T-shirts."
          }
        ],
        "answerCheck": "For 106 T-shirts, Joel earns 106 × $12 + 10 × $5 + $50 = $1272 + $50 + $50 = $1372. He must sell 106 T-shirts."
      },
      "zh-Hans": {
        "strategy": "先计算卖出100件T恤时的固定收入，再补上达到目标所需的额外收入。",
        "steps": [
          {
            "title": "计算卖出100件的收入",
            "text": "按件收入是100 × $12 = $1200。100 ÷ 10 = 10组，每组奖金共10 × $5 = $50，卖出100件另有$50奖金。"
          },
          {
            "title": "与目标收入比较",
            "text": "卖出100件共得$1200 + $50 + $50 = $1300，还差$1372 − $1300 = $72。"
          },
          {
            "title": "求额外需要卖出的件数",
            "text": "卖出100件以后，尚未凑满下一组10件时，每多卖1件可得$12。$72 ÷ $12 = 6，所以要卖100 + 6 = 106件。"
          }
        ],
        "answerCheck": "卖出106件时，收入为106 × $12 + 10 × $5 + $50 = $1272 + $50 + $50 = $1372。因此要卖106件T恤。"
      }
    }
  },
  {
    "id": 59,
    "topic": "Money",
    "question": "4 boxes of coloured pencils cost as much as 3 boxes of paint. Natalie had just enough money to buy 7 boxes of paint and 2 boxes of coloured pencils. If a box of paint cost $5.40, how much would Natalie have left if she only bought 5 boxes of paint?",
    "answer": "$18.90",
    "model": "money-units",
    "hint": "Use 3 paint boxes = 4 coloured-pencil boxes to price 2 coloured-pencil boxes, then find Natalie's original money.",
    "questionZh": "4盒彩色铅笔的价钱等于3盒颜料。娜塔莉的钱刚好可以买7盒颜料和2盒彩色铅笔。若每盒颜料$5.40，她只买5盒颜料会剩下多少钱？",
    "hintZh": "利用3盒颜料 = 4盒彩色铅笔，求2盒彩色铅笔的价钱，再求娜塔莉原有的钱。",
    "solution": {
      "en": {
        "strategy": "Use the price relationship between paint and coloured-pencil boxes to find Natalie's original money.",
        "steps": [
          {
            "title": "Find the coloured-pencil-box price",
            "text": "3 boxes of paint cost 3 × $5.40 = $16.20, the same as 4 boxes of coloured pencils. Thus 2 coloured-pencil boxes cost half of $16.20, or $8.10."
          },
          {
            "title": "Find Natalie's original money",
            "text": "7 paint boxes cost 7 × $5.40 = $37.80. Together with 2 coloured-pencil boxes, Natalie had $37.80 + $8.10 = $45.90."
          },
          {
            "title": "Subtract the cost of 5 paint boxes",
            "text": "5 paint boxes cost 5 × $5.40 = $27.00. Subtract this from $45.90."
          }
        ],
        "answerCheck": "$45.90 − $27.00 = $18.90, so Natalie would have $18.90 left."
      },
      "zh-Hans": {
        "strategy": "利用颜料盒与彩色铅笔盒的价钱关系，先求娜塔莉原有的钱数。",
        "steps": [
          {
            "title": "求彩色铅笔盒的价钱",
            "text": "3盒颜料值3 × $5.40 = $16.20，等于4盒彩色铅笔的价钱。因此2盒彩色铅笔值$16.20的一半，即$8.10。"
          },
          {
            "title": "求娜塔莉原有的钱",
            "text": "7盒颜料值7 × $5.40 = $37.80。再加上2盒彩色铅笔的$8.10，原有$37.80 + $8.10 = $45.90。"
          },
          {
            "title": "减去买5盒颜料的费用",
            "text": "5盒颜料值5 × $5.40 = $27.00，从$45.90中减去这笔钱。"
          }
        ],
        "answerCheck": "$45.90 − $27.00 = $18.90，所以娜塔莉会剩下$18.90。"
      }
    }
  },
  {
    "id": 60,
    "topic": "Money",
    "question": "Jeffrey had 4 times as many 20-cent coins as 10-cent coins and 1/3 as many 50-cent coins as 10-cent coins. If he had 2 of the 50-cent coins, how much money would he have left if he spent $2.75 on a pair of socks?",
    "answer": "$3.65",
    "model": "money-units",
    "hint": "The 50-cent coins are 1/3 of the 10-cent coins, so use the 2 of them to find how many 10-cent coins there are. Then find the number and the total value of all the coins.",
    "questionZh": "杰弗里20分硬币的数量是10分硬币的4倍，50分硬币的数量是10分硬币的1/3。若他有2枚50分硬币，买一双袜子花$2.75后还剩多少钱？",
    "hintZh": "50分硬币的数量是10分硬币的1/3，所以用这2枚求出10分硬币有多少枚。再求所有硬币的数量和总价值。",
    "solution": {
      "en": {
        "strategy": "Use the 50-cent coins to determine each coin count, then calculate the total value.",
        "steps": [
          {
            "title": "Find the numbers of coins",
            "text": "The 2 fifty-cent coins are 1/3 as many as the ten-cent coins, so there are 2 × 3 = 6 ten-cent coins. There are 4 times as many twenty-cent coins, or 4 × 6 = 24."
          },
          {
            "title": "Find the value before buying socks",
            "text": "The ten-cent coins are worth 6 × $0.10 = $0.60, the twenty-cent coins are worth 24 × $0.20 = $4.80, and the fifty-cent coins are worth 2 × $0.50 = $1.00. Total value is $6.40."
          },
          {
            "title": "Subtract the sock cost",
            "text": "Subtract the $2.75 spent on socks from the $6.40 in coins."
          }
        ],
        "answerCheck": "$6.40 − $2.75 = $3.65, so Jeffrey would have $3.65 left."
      },
      "zh-Hans": {
        "strategy": "先由50分硬币数求各种硬币的数量，再计算所有硬币的总值。",
        "steps": [
          {
            "title": "求各种硬币的枚数",
            "text": "2枚50分硬币是10分硬币数量的1/3，所以10分硬币有2 × 3 = 6枚。20分硬币是10分硬币的4倍，即4 × 6 = 24枚。"
          },
          {
            "title": "求买袜子前的总钱数",
            "text": "10分硬币值6 × $0.10 = $0.60；20分硬币值24 × $0.20 = $4.80；50分硬币值2 × $0.50 = $1.00。总值为$6.40。"
          },
          {
            "title": "减去袜子的价钱",
            "text": "用硬币总值$6.40减去买袜子的$2.75。"
          }
        ],
        "answerCheck": "$6.40 − $2.75 = $3.65，所以杰弗里还剩$3.65。"
      }
    }
  },
  {
    "id": 61,
    "topic": "Money",
    "question": "Michael had some flowers. He sold 2/3 of them at 90¢ each and the rest at 50¢ each. Fanny sold the same number of flowers at 80¢ each, collecting a total of $7.20. How much did Michael collect?",
    "answer": "$6.90",
    "model": "fraction-of-remainder",
    "hint": "Use Fanny's $7.20 at 80¢ each to find the number of flowers. Then split Michael's flowers into 2/3 and 1/3.",
    "questionZh": "迈克尔有一些花。他以每朵90¢卖出其中的2/3，以每朵50¢卖出其余的花。范妮以每朵80¢卖出同样数量的花，共收$7.20。迈克尔共收多少钱？",
    "hintZh": "由范妮每朵80¢、共$7.20求花的数量。再把迈克尔的花按2/3和1/3分开。",
    "solution": {
      "en": {
        "strategy": "Use Fanny's sales to find the common number of flowers, then split Michael's flowers into 2/3 and 1/3.",
        "steps": [
          {
            "title": "Find the number of flowers",
            "text": "Fanny collected $7.20 at $0.80 per flower, so she sold $7.20 ÷ $0.80 = 9 flowers. Michael had the same number, 9 flowers."
          },
          {
            "title": "Find Michael's sales at each price",
            "text": "Michael sold 2/3 of 9, or 6 flowers, at $0.90 each. He sold the remaining 1/3 of 9, or 3 flowers, at $0.50 each."
          },
          {
            "title": "Add Michael's collections",
            "text": "The two collections are 6 × $0.90 = $5.40 and 3 × $0.50 = $1.50."
          }
        ],
        "answerCheck": "$5.40 + $1.50 = $6.90, so Michael collected $6.90."
      },
      "zh-Hans": {
        "strategy": "由范妮的销售额求出共同的花朵数量，再把迈克尔的花分成2/3和1/3。",
        "steps": [
          {
            "title": "求花朵数",
            "text": "范妮每朵卖$0.80，共收$7.20，所以她卖出$7.20 ÷ $0.80 = 9朵。迈克尔也有同样的9朵花。"
          },
          {
            "title": "求迈克尔按两种价钱卖出的数量",
            "text": "迈克尔以每朵$0.90卖出9的2/3，即6朵；以每朵$0.50卖出剩下的1/3，即3朵。"
          },
          {
            "title": "相加两部分收入",
            "text": "两部分收入分别是6 × $0.90 = $5.40和3 × $0.50 = $1.50。"
          }
        ],
        "answerCheck": "$5.40 + $1.50 = $6.90，所以迈克尔共收$6.90。"
      }
    }
  },
  {
    "id": 62,
    "topic": "Money",
    "question": "When Nelly bought 5 pencils, she spent the same amount as Benjamin who bought 3 pens. If Benjamin spent 2/7 of his money buying the pens and he had $45 left, what was the total cost of a pencil and a pen?",
    "answer": "$9.60",
    "model": "money-units",
    "hint": "The $45 left is 5/7 of Benjamin's money. Find the cost of his 3 pens, which is also the cost of 5 pencils.",
    "questionZh": "内莉买5支铅笔所花的钱，与本杰明买3支钢笔所花的钱相同。若本杰明买钢笔花了自己钱的2/7，且还剩$45，一支铅笔和一支钢笔的总价是多少？",
    "hintZh": "剩下的$45是本杰明的钱的5/7。求他买3支钢笔的价钱，这也等于5支铅笔的价钱。",
    "solution": {
      "en": {
        "strategy": "Use Benjamin's remaining 5/7 to find the shared cost of 3 pens and 5 pencils.",
        "steps": [
          {
            "title": "Find the cost of 3 pens",
            "text": "Benjamin spent 2/7 of his money and had 5/7 left. Since 5/7 is $45, 1/7 is $45 ÷ 5 = $9. Thus the 2/7 spent on 3 pens is 2 × $9 = $18."
          },
          {
            "title": "Find each item price",
            "text": "3 pens cost $18, so 1 pen costs $18 ÷ 3 = $6. The same $18 buys 5 pencils, so 1 pencil costs $18 ÷ 5 = $3.60."
          },
          {
            "title": "Combine one pencil and one pen",
            "text": "Add the $3.60 pencil price to the $6 pen price."
          }
        ],
        "answerCheck": "$3.60 + $6 = $9.60, so a pencil and a pen cost $9.60 altogether."
      },
      "zh-Hans": {
        "strategy": "用本杰明剩下的钱占5/7，求出3支钢笔和5支铅笔共同的价钱。",
        "steps": [
          {
            "title": "求3支钢笔的价钱",
            "text": "本杰明花了钱的2/7，剩下5/7。5/7是$45，所以1/7是$45 ÷ 5 = $9，买3支钢笔的2/7是2 × $9 = $18。"
          },
          {
            "title": "求每件物品的单价",
            "text": "3支钢笔值$18，因此1支钢笔是$18 ÷ 3 = $6。5支铅笔也值$18，因此1支铅笔是$18 ÷ 5 = $3.60。"
          },
          {
            "title": "合并1支铅笔和1支钢笔的价钱",
            "text": "把铅笔的$3.60和钢笔的$6相加。"
          }
        ],
        "answerCheck": "$3.60 + $6 = $9.60，所以1支铅笔和1支钢笔共$9.60。"
      }
    }
  },
  {
    "id": 63,
    "topic": "Money",
    "question": "Ron earns $12 an hour on weekdays and 2 times as much on weekends. Ron works 8 hours a day on weekdays and 5 hours a day on Saturdays and Sundays. How much will he earn in 2 weeks if he works every day?",
    "answer": "$1440",
    "model": "money-units",
    "hint": "Count weekday and weekend hours separately over 2 weeks, because the hourly rates differ.",
    "questionZh": "罗恩平日每小时赚$12，周末每小时赚2倍。罗恩平日每天工作8小时，星期六和星期日每天工作5小时。若连续每天工作，2周能赚多少钱？",
    "hintZh": "平日和周末的时薪不同，因此分别计算2周内的平日与周末工作时数。",
    "solution": {
      "en": {
        "strategy": "Calculate weekday and weekend earnings separately for the 2 weeks.",
        "steps": [
          {
            "title": "Find weekday earnings",
            "text": "There are 10 weekdays in 2 weeks. Ron works 10 × 8 = 80 weekday hours at $12 per hour, earning 80 × $12 = $960."
          },
          {
            "title": "Find weekend earnings",
            "text": "Weekend pay is 2 × $12 = $24 per hour. There are 4 weekend days in 2 weeks, so Ron works 4 × 5 = 20 hours and earns 20 × $24 = $480."
          },
          {
            "title": "Add both earnings",
            "text": "Add the $960 weekday earnings and the $480 weekend earnings."
          }
        ],
        "answerCheck": "$960 + $480 = $1440, so Ron will earn $1440 in 2 weeks."
      },
      "zh-Hans": {
        "strategy": "分别计算2周内平日和周末的收入。",
        "steps": [
          {
            "title": "计算平日收入",
            "text": "2周有10个平日。罗恩平日工作10 × 8 = 80小时，时薪$12，收入为80 × $12 = $960。"
          },
          {
            "title": "计算周末收入",
            "text": "周末时薪是2 × $12 = $24。2周有4个周末日，工作4 × 5 = 20小时，收入为20 × $24 = $480。"
          },
          {
            "title": "相加两部分收入",
            "text": "把平日的$960和周末的$480相加。"
          }
        ],
        "answerCheck": "$960 + $480 = $1440，所以罗恩2周共赚$1440。"
      }
    }
  },
  {
    "id": 64,
    "topic": "Money",
    "question": "The cost of a magazine and 2 books is $34. The cost of 3 magazines and 4 books is $76. If Tasha buys 13 magazines and 9 books, how much money does she spend?",
    "answer": "$221",
    "model": "money-units",
    "hint": "Double the 1st purchase, then compare it with the 2nd purchase to isolate the cost of 1 magazine.",
    "questionZh": "1本杂志和2本书共$34。3本杂志和4本书共$76。若塔莎买13本杂志和9本书，她要花多少钱？",
    "hintZh": "把第1次购买乘以2，再与第2次购买比较，求出1本杂志的价钱。",
    "solution": {
      "en": {
        "strategy": "Eliminate the book cost by comparing twice the first purchase with the second purchase.",
        "steps": [
          {
            "title": "Find the magazine price",
            "text": "Twice the cost of 1 magazine and 2 books is 2 magazines and 4 books for 2 × $34 = $68. The second purchase, 3 magazines and 4 books, costs $76. The extra magazine costs $76 − $68 = $8."
          },
          {
            "title": "Find the book price",
            "text": "1 magazine and 2 books cost $34. With a magazine at $8, 2 books cost $34 − $8 = $26, so 1 book costs $13."
          },
          {
            "title": "Find Tasha's cost",
            "text": "13 magazines cost 13 × $8 = $104, and 9 books cost 9 × $13 = $117."
          }
        ],
        "answerCheck": "$104 + $117 = $221, so Tasha spends $221."
      },
      "zh-Hans": {
        "strategy": "把第一次购买乘以2后与第二次购买比较，消去书的价钱。",
        "steps": [
          {
            "title": "求杂志单价",
            "text": "1本杂志和2本书共$34，乘以2后，2本杂志和4本书共$68。第二次的3本杂志和4本书共$76，多出的1本杂志值$76 − $68 = $8。"
          },
          {
            "title": "求书的单价",
            "text": "1本杂志和2本书共$34。杂志是$8，所以2本书值$34 − $8 = $26，1本书是$13。"
          },
          {
            "title": "求塔莎的总花费",
            "text": "13本杂志值13 × $8 = $104，9本书值9 × $13 = $117。"
          }
        ],
        "answerCheck": "$104 + $117 = $221，所以塔莎花$221。"
      }
    }
  },
  {
    "id": 65,
    "topic": "Money",
    "question": "An apple and 2 oranges cost $2.30. 2 apples and an orange cost $2.50. What is the cost of 4 apples and 6 oranges?",
    "answer": "$7.80",
    "model": "money-units",
    "hint": "Double the 1st equation and compare it with the 2nd equation to find the cost of an orange.",
    "questionZh": "1个苹果和2个橙子共$2.30。2个苹果和1个橙子共$2.50。4个苹果和6个橙子共多少钱？",
    "hintZh": "把第1个等式乘以2，再与第2个等式比较，求出1个橙子的价钱。",
    "solution": {
      "en": {
        "strategy": "Compare twice the first equation with the second equation to determine both fruit prices.",
        "steps": [
          {
            "title": "Find the orange price",
            "text": "Twice the cost of 1 apple and 2 oranges is 2 apples and 4 oranges for 2 × $2.30 = $4.60. Compared with 2 apples and 1 orange for $2.50, 3 oranges cost $4.60 − $2.50 = $2.10."
          },
          {
            "title": "Find the apple price",
            "text": "1 orange costs $2.10 ÷ 3 = $0.70. From 1 apple + 2 oranges = $2.30, 1 apple costs $2.30 − 2 × $0.70 = $0.90."
          },
          {
            "title": "Calculate the requested cost",
            "text": "4 apples cost 4 × $0.90 = $3.60, and 6 oranges cost 6 × $0.70 = $4.20."
          }
        ],
        "answerCheck": "$3.60 + $4.20 = $7.80, so 4 apples and 6 oranges cost $7.80."
      },
      "zh-Hans": {
        "strategy": "把第一个等式乘以2后与第二个等式比较，求出两种水果的单价。",
        "steps": [
          {
            "title": "求橙子的单价",
            "text": "1个苹果和2个橙子共$2.30，乘以2后，2个苹果和4个橙子共$4.60。与2个苹果和1个橙子的$2.50比较，3个橙子值$4.60 − $2.50 = $2.10。"
          },
          {
            "title": "求苹果的单价",
            "text": "1个橙子是$2.10 ÷ 3 = $0.70。由1个苹果和2个橙子共$2.30，苹果是$2.30 − 2 × $0.70 = $0.90。"
          },
          {
            "title": "计算要求的总价",
            "text": "4个苹果值4 × $0.90 = $3.60，6个橙子值6 × $0.70 = $4.20。"
          }
        ],
        "answerCheck": "$3.60 + $4.20 = $7.80，所以4个苹果和6个橙子共$7.80。"
      }
    }
  },
  {
    "id": 66,
    "topic": "Money",
    "question": "Mrs Bellamont sold 2 times as many butter cookies as chocolate chip cookies and 2 times as many chocolate chip cookies as coconut cookies. Each box of 4 cookies was sold for $4.50. 80 chocolate chip cookies were sold. How much would Mrs Bellamont collect from the sale of all the cookies?",
    "answer": "$315",
    "model": "unit-bar",
    "hint": "Use chocolate chip cookies as 2 units. Find the total cookies, then the number of boxes of 4.",
    "questionZh": "贝拉蒙特太太卖出的黄油饼干数量是巧克力碎片饼干的2倍，巧克力碎片饼干数量是椰子饼干的2倍。每盒4块饼干售价$4.50。已卖出80块巧克力碎片饼干。贝拉蒙特太太卖出所有饼干可收多少钱？",
    "hintZh": "把巧克力碎片饼干表示为2份。求饼干总数，再求4块一盒的盒数。",
    "solution": {
      "en": {
        "strategy": "Use the 80 chocolate chip cookies as the reference to find every cookie count and then the number of boxes.",
        "steps": [
          {
            "title": "Find each type of cookie",
            "text": "There are 80 chocolate chip cookies. Butter cookies are twice this number: 2 × 80 = 160. Chocolate chip cookies are twice the coconut cookies, so coconut cookies number 80 ÷ 2 = 40."
          },
          {
            "title": "Find the number of boxes",
            "text": "The total number of cookies is 160 + 80 + 40 = 280. At 4 cookies per box, this makes 280 ÷ 4 = 70 boxes."
          },
          {
            "title": "Find the collection",
            "text": "Each box sells for $4.50, so multiply 70 by $4.50."
          }
        ],
        "answerCheck": "70 × $4.50 = $315, so Mrs Bellamont collects $315 from all the cookies."
      },
      "zh-Hans": {
        "strategy": "以80块巧克力碎片饼干为基准，求各种饼干数量和盒数。",
        "steps": [
          {
            "title": "求每种饼干的数量",
            "text": "巧克力碎片饼干有80块。黄油饼干是它的2倍，即2 × 80 = 160块。巧克力碎片饼干是椰子饼干的2倍，所以椰子饼干有80 ÷ 2 = 40块。"
          },
          {
            "title": "求盒数",
            "text": "饼干总数为160 + 80 + 40 = 280块。每盒4块，所以有280 ÷ 4 = 70盒。"
          },
          {
            "title": "求总收入",
            "text": "每盒卖$4.50，因此用70乘$4.50。"
          }
        ],
        "answerCheck": "70 × $4.50 = $315，所以贝拉蒙特太太卖出所有饼干可收$315。"
      }
    }
  },
  {
    "id": 67,
    "topic": "Mass",
    "question": "The total mass of Gilbert and Sean was 124 kg. If Sean lost 1/4 of his mass, he would be 45 kg. How much heavier was Gilbert compared to Sean?",
    "answer": "4 kg",
    "model": "mass-bar",
    "hint": "After losing 1/4, Sean has 3/4 of his original mass. Use 45 kg to recover his original mass.",
    "questionZh": "吉尔伯特和肖恩的总质量是124 kg。若肖恩减去自己质量的1/4，他的质量将是45 kg。吉尔伯特比肖恩重多少？",
    "hintZh": "肖恩减去1/4后，剩下原来质量的3/4。利用45 kg求出他原来的质量。",
    "solution": {
      "en": {
        "strategy": "Recover Sean's original mass from the 3/4 that remains after his loss, then compare it with Gilbert's mass.",
        "steps": [
          {
            "title": "Find Sean's original mass",
            "text": "After losing 1/4 of his mass, Sean has 3/4 left, and that is 45 kg. Therefore, 1/4 is 45 ÷ 3 = 15 kg, so Sean originally weighed 4 × 15 = 60 kg."
          },
          {
            "title": "Find Gilbert's mass",
            "text": "Together they weighed 124 kg, so Gilbert weighed 124 kg − 60 kg = 64 kg."
          },
          {
            "title": "Compare the masses",
            "text": "Subtract Sean's 60 kg from Gilbert's 64 kg."
          }
        ],
        "answerCheck": "64 kg − 60 kg = 4 kg, so Gilbert was 4 kg heavier than Sean."
      },
      "zh-Hans": {
        "strategy": "由肖恩减重后剩下的3/4反求原来的质量，再与吉尔伯特的质量比较。",
        "steps": [
          {
            "title": "求肖恩原来的质量",
            "text": "肖恩减去1/4后剩下3/4，这3/4是45 kg。因此1/4是45 ÷ 3 = 15 kg，肖恩原来重4 × 15 = 60 kg。"
          },
          {
            "title": "求吉尔伯特的质量",
            "text": "两人共重124 kg，所以吉尔伯特重124 kg − 60 kg = 64 kg。"
          },
          {
            "title": "比较两人的质量",
            "text": "用吉尔伯特的64 kg减去肖恩的60 kg。"
          }
        ],
        "answerCheck": "64 kg − 60 kg = 4 kg，所以吉尔伯特比肖恩重4 kg。"
      }
    }
  },
  {
    "id": 68,
    "topic": "Mass",
    "question": "4 parcels, A, B, C and D have a total mass of 100.75 kg. Parcel A weighs 12.45 kg more than parcel B. Parcel B weighs 8.4 kg less than parcel C. Parcel C weighs 24.2 kg. How much heavier is parcel D than parcel C?",
    "answer": "8.3 kg",
    "model": "mass-bar",
    "hint": "Find B from C, then A from B. Subtract A, B, and C from the total to find D.",
    "questionZh": "A、B、C和D共4个包裹的总质量是100.75 kg。A包裹比B包裹重12.45 kg。B包裹比C包裹轻8.4 kg。C包裹重24.2 kg。D包裹比C包裹重多少？",
    "hintZh": "由C求B，再由B求A。从总质量中减去A、B和C的质量，求出D。",
    "solution": {
      "en": {
        "strategy": "Find parcels B and A from parcel C, then subtract A, B, and C from the total to find D.",
        "steps": [
          {
            "title": "Find parcels B and A",
            "text": "Parcel B is 8.4 kg less than parcel C, so B weighs 24.2 kg − 8.4 kg = 15.8 kg. Parcel A is 12.45 kg more than B, so A weighs 15.8 kg + 12.45 kg = 28.25 kg."
          },
          {
            "title": "Find parcel D",
            "text": "Parcels A, B, and C weigh 28.25 kg + 15.8 kg + 24.2 kg = 68.25 kg. Thus D weighs 100.75 kg − 68.25 kg = 32.5 kg."
          },
          {
            "title": "Compare D and C",
            "text": "Subtract C's 24.2 kg from D's 32.5 kg."
          }
        ],
        "answerCheck": "32.5 kg − 24.2 kg = 8.3 kg, so parcel D is 8.3 kg heavier than parcel C."
      },
      "zh-Hans": {
        "strategy": "先由C包裹求出B和A包裹的质量，再从总质量中减去A、B、C以求D。",
        "steps": [
          {
            "title": "求B和A包裹的质量",
            "text": "B包裹比C包裹轻8.4 kg，所以B是24.2 kg − 8.4 kg = 15.8 kg。A包裹比B包裹重12.45 kg，所以A是15.8 kg + 12.45 kg = 28.25 kg。"
          },
          {
            "title": "求D包裹的质量",
            "text": "A、B、C的质量是28.25 kg + 15.8 kg + 24.2 kg = 68.25 kg。因此D是100.75 kg − 68.25 kg = 32.5 kg。"
          },
          {
            "title": "比较D和C包裹",
            "text": "用D的32.5 kg减去C的24.2 kg。"
          }
        ],
        "answerCheck": "32.5 kg − 24.2 kg = 8.3 kg，所以D包裹比C包裹重8.3 kg。"
      }
    }
  },
  {
    "id": 69,
    "topic": "Mass",
    "question": "Box A was 3.45 kg heavier than box B. When 1.2 kg of items in box A was removed, box A became 4 times as heavy as box B. What was the mass of box A in the beginning?",
    "answer": "4.2 kg",
    "model": "mass-bar",
    "hint": "After removal, use the 4:1 mass ratio. The original difference is 3.45 kg, so the new difference is 3.45 − 1.2 kg.",
    "questionZh": "A盒比B盒重3.45 kg。从A盒取出1.2 kg物品后，A盒的质量变为B盒的4倍。A盒开始时的质量是多少？",
    "hintZh": "取出后，利用4:1的质量比。原来的差是3.45 kg，因此新的差是3.45 − 1.2 kg。",
    "solution": {
      "en": {
        "strategy": "Compare the new mass difference with the 4:1 ratio.",
        "steps": [
          {
            "title": "Find the new difference",
            "text": "After 1.2 kg is removed from A, the difference is 3.45 − 1.2 = 2.25 kg."
          },
          {
            "title": "Use the ratio",
            "text": "At that time A is 4 times B, so the difference of 3 parts is 2.25 kg. One part, B, is 2.25 ÷ 3 = 0.75 kg; A then is 4 × 0.75 = 3 kg."
          },
          {
            "title": "Restore the removed items",
            "text": "The beginning mass of A was 3 + 1.2 = 4.2 kg."
          }
        ],
        "answerCheck": "Therefore, the answer is 4.2 kg."
      },
      "zh-Hans": {
        "strategy": "把取出后的质量差与4:1的质量比对应起来。",
        "steps": [
          {
            "title": "求取出后的差",
            "text": "从A盒取出1.2 kg后，两盒的质量差是3.45 − 1.2 = 2.25 kg。"
          },
          {
            "title": "利用4:1",
            "text": "此时A是B的4倍，差是3份，所以1份即B盒质量为2.25 ÷ 3 = 0.75 kg。此时A盒质量为4 × 0.75 = 3 kg。"
          },
          {
            "title": "加回取出的物品",
            "text": "A盒开始时的质量为3 + 1.2 = 4.2 kg。"
          }
        ],
        "answerCheck": "所以答案是4.2 kg。"
      }
    }
  },
  {
    "id": 70,
    "topic": "Mass",
    "question": "The mass of a box is 45 kg when it is full. When 1/2 of the items in the box are taken out, the mass of the remaining items and the box is 33 kg. What is the mass of 6 empty boxes?",
    "answer": "126 kg",
    "model": "mass-bar",
    "hint": "The difference between 45 kg and 33 kg is the mass of 1/2 the items. Use it to find the empty box's mass.",
    "questionZh": "一个盒子装满时质量为45 kg。取出盒中物品的1/2后，剩余物品和盒子的质量为33 kg。6个空盒子的质量是多少？",
    "hintZh": "45 kg与33 kg的差是物品的1/2的质量。利用它求出1个空盒子的质量。",
    "solution": {
      "en": {
        "strategy": "The drop in total mass is half the items, then use the full mass.",
        "steps": [
          {
            "title": "Find half the items’ mass",
            "text": "Removing half the items changes the mass from 45 kg to 33 kg, so half the items weigh 45 − 33 = 12 kg."
          },
          {
            "title": "Find one empty box",
            "text": "All the items weigh 2 × 12 = 24 kg. Therefore one empty box weighs 45 − 24 = 21 kg."
          },
          {
            "title": "Find six boxes",
            "text": "The mass of 6 empty boxes is 6 × 21 = 126 kg."
          }
        ],
        "answerCheck": "Therefore, the answer is 126 kg."
      },
      "zh-Hans": {
        "strategy": "先由减少的质量求出物品的一半，再求空盒质量。",
        "steps": [
          {
            "title": "求物品一半的质量",
            "text": "取出一半物品后，总质量从45 kg变为33 kg，所以物品的一半质量是45 − 33 = 12 kg。"
          },
          {
            "title": "求1个空盒的质量",
            "text": "全部物品的质量是2 × 12 = 24 kg。因此1个空盒的质量是45 − 24 = 21 kg。"
          },
          {
            "title": "求6个空盒的质量",
            "text": "6个空盒的质量是6 × 21 = 126 kg。"
          }
        ],
        "answerCheck": "所以答案是126 kg。"
      }
    }
  },
  {
    "id": 71,
    "topic": "Area & Perimeter",
    "question": "9 small squares are used to form a large square. If each side of a small square is 7 cm, what is the area of the large square?",
    "answer": "441 cm²",
    "model": "geometry",
    "hint": "The 9 small squares make a 3-by-3 array. Find the side length of the large square before finding its area.",
    "questionZh": "用9个小正方形拼成一个大正方形。若每个小正方形的边长是7 cm，大正方形的面积是多少？",
    "hintZh": "9个小正方形组成一个3×3方阵。先求大正方形的边长，再求面积。",
    "solution": {
      "en": {
        "strategy": "Arrange the 9 equal squares in a 3-by-3 large square.",
        "steps": [
          {
            "title": "Find the large side",
            "text": "Since 9 squares make 3 rows of 3, the large square’s side is 3 × 7 = 21 cm."
          },
          {
            "title": "Find the area",
            "text": "Its area is 21 × 21 = 441 cm²."
          }
        ],
        "answerCheck": "Therefore, the answer is 441 cm²."
      },
      "zh-Hans": {
        "strategy": "把9个相同的小正方形看成3×3的排列。",
        "steps": [
          {
            "title": "求大正方形边长",
            "text": "9个小正方形排成3行3列，所以大正方形边长是3 × 7 = 21 cm。"
          },
          {
            "title": "求面积",
            "text": "大正方形面积是21 × 21 = 441 cm²。"
          }
        ],
        "answerCheck": "所以答案是441 cm²。"
      }
    }
  },
  {
    "id": 72,
    "topic": "Area & Perimeter",
    "question": "The diagram shows a square ABCD with an area of 81 cm². A is the top left corner, B the top right, C the bottom right and D the bottom left. A step-shaped line runs from G on side AD horizontally to H, then vertically up to E, then horizontally to F on side BC, so E is level with F and the unshaded portion is ABFEHG. AG is 7 cm, and BF is the same length as GD. Find the perimeter of the unshaded portion.",
    "answer": "32 cm",
    "model": "geometry",
    "hint": "The square's side is 9 cm, so BF = GD = 9 − 7 = 2 cm and EH = 7 − 2 = 5 cm. GH and EF together span the full 9 cm. Remember that the 2 step edges are part of the perimeter.",
    "questionZh": "图中正方形ABCD的面积是81 cm²。A是左上角，B是右上角，C是右下角，D是左下角。一条阶梯形的线从AD边上的G点水平向右到H点，再竖直向上到E点，然后水平向右到BC边上的F点，因此E与F等高，未阴影部分是ABFEHG。AG是7 cm，BF与GD等长。求未阴影部分的周长。",
    "hintZh": "正方形的边长是9 cm，所以BF = GD = 9 − 7 = 2 cm，EH = 7 − 2 = 5 cm。GH与EF合起来正好是整条边9 cm。注意2段阶梯边也属于周长。",
    "solution": {
      "en": {
        "strategy": "Use the square’s side and combine the two horizontal step segments.",
        "steps": [
          {
            "title": "Find the needed side lengths",
            "text": "The square side is √81 = 9 cm. GD = 9 − 7 = 2 cm, so BF = 2 cm. Also EH = AG − BF = 7 − 2 = 5 cm."
          },
          {
            "title": "Combine the horizontal segments",
            "text": "GH and EF together span the square’s full width, so GH + EF = 9 cm."
          },
          {
            "title": "Add the boundary",
            "text": "Perimeter ABFEHG = AB + BF + EF + EH + HG + GA = 9 + 2 + 9 + 5 + 7 = 32 cm."
          }
        ],
        "answerCheck": "Therefore, the answer is 32 cm."
      },
      "zh-Hans": {
        "strategy": "先求正方形边长，再把两段水平阶梯边合并。",
        "steps": [
          {
            "title": "求各边长度",
            "text": "正方形边长是√81 = 9 cm。GD = 9 − 7 = 2 cm，所以BF = 2 cm；EH = AG − BF = 7 − 2 = 5 cm。"
          },
          {
            "title": "合并水平边",
            "text": "GH与EF合起来正好横跨正方形的宽，因此GH + EF = 9 cm。"
          },
          {
            "title": "相加求周长",
            "text": "ABFEHG的周长 = AB + BF + EF + EH + GH + GA = 9 + 2 + 9 + 5 + 7 = 32 cm。"
          }
        ],
        "answerCheck": "所以答案是32 cm。"
      }
    }
  },
  {
    "id": 73,
    "topic": "Area & Perimeter",
    "question": "The perimeter of a rectangle is 288 cm. The length is 3 times the breadth. Find the area of the rectangle.",
    "answer": "3888 cm²",
    "model": "geometry",
    "hint": "A perimeter has 2 lengths and 2 breadths. Treat 1 breadth as 1 unit and the length as 3 units.",
    "questionZh": "一个长方形的周长是288 cm。长是宽的3倍。求这个长方形的面积。",
    "hintZh": "周长包含2条长和2条宽。把1条宽设为1份，长设为3份。",
    "solution": {
      "en": {
        "strategy": "Use the 3:1 length-to-breadth ratio in the perimeter.",
        "steps": [
          {
            "title": "Split the perimeter into units",
            "text": "Two lengths and two breadths make 2 × 3 + 2 × 1 = 8 equal units. Each unit is 288 ÷ 8 = 36 cm."
          },
          {
            "title": "Find the dimensions",
            "text": "Breadth = 36 cm and length = 3 × 36 = 108 cm."
          },
          {
            "title": "Find the area",
            "text": "Area = 108 × 36 = 3888 cm²."
          }
        ],
        "answerCheck": "Therefore, the answer is 3888 cm²."
      },
      "zh-Hans": {
        "strategy": "把长与宽按3:1分份，并利用周长。",
        "steps": [
          {
            "title": "把周长分成等份",
            "text": "两条长和两条宽共有2 × 3 + 2 × 1 = 8份。每份为288 ÷ 8 = 36 cm。"
          },
          {
            "title": "求长和宽",
            "text": "宽为36 cm，长为3 × 36 = 108 cm。"
          },
          {
            "title": "求面积",
            "text": "面积 = 108 × 36 = 3888 cm²。"
          }
        ],
        "answerCheck": "所以答案是3888 cm²。"
      }
    }
  },
  {
    "id": 74,
    "topic": "Area & Perimeter",
    "question": "A wire was cut and 2/3 of it was bent to form a square. The remaining length of the wire was bent to form a rectangle. The area of the square was 36 cm². What was the length of the wire at 1st?",
    "answer": "36 cm",
    "model": "geometry",
    "hint": "Find the square's side from its area, then its perimeter. That perimeter is 2/3 of the original wire.",
    "questionZh": "一根铁丝被剪开，其中的2/3弯成一个正方形，剩下的铁丝弯成一个长方形。正方形的面积是36 cm²。这根铁丝开始时长多少？",
    "hintZh": "由面积求正方形边长，再求周长。这个周长是原来铁丝的2/3。",
    "solution": {
      "en": {
        "strategy": "The square’s perimeter is two-thirds of the original wire.",
        "steps": [
          {
            "title": "Find the square side",
            "text": "A square with area 36 cm² has side √36 = 6 cm."
          },
          {
            "title": "Find the used wire",
            "text": "Its perimeter is 4 × 6 = 24 cm. This is 2/3 of the original wire."
          },
          {
            "title": "Find the original length",
            "text": "Original length = 24 ÷ 2 × 3 = 36 cm."
          }
        ],
        "answerCheck": "Therefore, the answer is 36 cm."
      },
      "zh-Hans": {
        "strategy": "正方形的周长就是原来铁丝的2/3。",
        "steps": [
          {
            "title": "求正方形边长",
            "text": "正方形面积为36 cm²，所以边长是√36 = 6 cm。"
          },
          {
            "title": "求弯成正方形的铁丝长度",
            "text": "正方形周长为4 × 6 = 24 cm，这占原来铁丝的2/3。"
          },
          {
            "title": "求原来长度",
            "text": "原来铁丝长度 = 24 ÷ 2 × 3 = 36 cm。"
          }
        ],
        "answerCheck": "所以答案是36 cm。"
      }
    }
  },
  {
    "id": 75,
    "topic": "Area & Perimeter",
    "question": "Jenny draws a picture on a piece of paper with a border of 4 cm around the picture. The length of the paper is 24 cm. If the breadth of the picture is 8 cm, find the area of the border.",
    "answer": "256 cm²",
    "model": "geometry",
    "hint": "The border adds 4 cm at each end, so the paper is 8 + 4 + 4 cm wide, while the picture is 24 − 4 − 4 cm long. Then subtract the picture's area from the paper's area.",
    "questionZh": "珍妮在一张纸上画画，画的四周有宽4 cm的边框。纸的长是24 cm。若画的宽是8 cm，求边框的面积。",
    "hintZh": "边框在两端各增加4 cm，所以纸宽是8 + 4 + 4 cm，而画长是24 − 4 − 4 cm。再用纸的面积减去画的面积。",
    "solution": {
      "en": {
        "strategy": "Find the paper and picture areas, then subtract.",
        "steps": [
          {
            "title": "Find the two dimensions",
            "text": "The paper breadth is 8 + 4 + 4 = 16 cm. The picture length is 24 − 4 − 4 = 16 cm."
          },
          {
            "title": "Find both areas",
            "text": "Paper area = 24 × 16 = 384 cm². Picture area = 16 × 8 = 128 cm²."
          },
          {
            "title": "Find the border area",
            "text": "Border area = 384 − 128 = 256 cm²."
          }
        ],
        "answerCheck": "Therefore, the answer is 256 cm²."
      },
      "zh-Hans": {
        "strategy": "先求纸和画的面积，再用两者相减。",
        "steps": [
          {
            "title": "求两个尺寸",
            "text": "纸的宽是8 + 4 + 4 = 16 cm。画的长是24 − 4 − 4 = 16 cm。"
          },
          {
            "title": "求两个面积",
            "text": "纸的面积 = 24 × 16 = 384 cm²。画的面积 = 16 × 8 = 128 cm²。"
          },
          {
            "title": "求边框面积",
            "text": "边框面积 = 384 − 128 = 256 cm²。"
          }
        ],
        "answerCheck": "所以答案是256 cm²。"
      }
    }
  },
  {
    "id": 76,
    "topic": "Area & Perimeter",
    "question": "The perimeter of a square is 1/2 the area of a rectangle. A wire is bent to form 3 such squares and 2 such rectangles. 20 cm of wire is left. If the length of the rectangle is 15 cm and its breadth is 12 cm, find the length of the wire.",
    "answer": "398 cm",
    "model": "geometry",
    "hint": "The rectangle's area is 180 cm², so 1 square's perimeter is 1/2 of it, that is 90 cm. Add 3 square perimeters, 2 rectangle perimeters and the 20 cm left over.",
    "questionZh": "一个正方形的周长是一个长方形面积的1/2。一根铁丝弯成3个这样的正方形和2个这样的长方形，剩下20 cm铁丝。若长方形长15 cm、宽12 cm，求铁丝的长度。",
    "hintZh": "长方形的面积是180 cm²，所以1个正方形的周长是它的1/2，即90 cm。把3个正方形的周长、2个长方形的周长和剩下的20 cm相加。",
    "solution": {
      "en": {
        "strategy": "Find the square perimeter from half the rectangle area, then total all wire pieces.",
        "steps": [
          {
            "title": "Find one square perimeter",
            "text": "Rectangle area = 15 × 12 = 180 cm². One square perimeter is 1/2 × 180 = 90 cm."
          },
          {
            "title": "Find wire used for the shapes",
            "text": "Three squares use 3 × 90 = 270 cm. One rectangle perimeter is 2 × (15 + 12) = 54 cm, so two rectangles use 2 × 54 = 108 cm."
          },
          {
            "title": "Add the leftover wire",
            "text": "Total wire = 270 + 108 + 20 = 398 cm."
          }
        ],
        "answerCheck": "Therefore, the answer is 398 cm."
      },
      "zh-Hans": {
        "strategy": "先由长方形面积求正方形周长，再把所有铁丝相加。",
        "steps": [
          {
            "title": "求1个正方形周长",
            "text": "长方形面积 = 15 × 12 = 180 cm²。1个正方形周长是180的1/2，即90 cm。"
          },
          {
            "title": "求图形使用的铁丝",
            "text": "3个正方形用3 × 90 = 270 cm。1个长方形周长 = 2 × (15 + 12) = 54 cm，2个长方形用2 × 54 = 108 cm。"
          },
          {
            "title": "加上剩余铁丝",
            "text": "铁丝总长 = 270 + 108 + 20 = 398 cm。"
          }
        ],
        "answerCheck": "所以答案是398 cm。"
      }
    }
  },
  {
    "id": 77,
    "topic": "Area & Perimeter",
    "question": "The diagram shows rectangle EFGH inside rectangle ABCD. The perimeter of EFGH is 180 cm and EF is 24 cm. The gap between AB and EF is 10 cm, and the gap between HG and DC is 13 cm. Y lies on AD and Z lies on BC, and YH is 2 times GZ. If YH is 12 cm, what is the area of rectangle ABCD?",
    "answer": "3738 cm²",
    "model": "geometry",
    "hint": "Use the perimeter of EFGH with EF = 24 cm to find EH. GZ is 1/2 of YH. Each side of ABCD is then the sum of 3 pieces: 10 + EH + 13 across, and YH + EF + GZ down.",
    "questionZh": "图中长方形EFGH在长方形ABCD的内部。EFGH的周长是180 cm，EF是24 cm。AB与EF之间的距离是10 cm，HG与DC之间的距离是13 cm。Y在AD上，Z在BC上，YH是GZ的2倍。若YH是12 cm，长方形ABCD的面积是多少？",
    "hintZh": "利用EFGH的周长和EF = 24 cm求EH。GZ是YH的1/2。于是ABCD的每条边都是3段之和：一个方向是10 + EH + 13，另一个方向是YH + EF + GZ。",
    "solution": {
      "en": {
        "strategy": "Use the inner rectangle’s perimeter, then add the surrounding gaps.",
        "steps": [
          {
            "title": "Find EH",
            "text": "For EFGH, 2 × (EF + EH) = 180. Thus EF + EH = 90 and EH = 90 − 24 = 66 cm."
          },
          {
            "title": "Find the outer dimensions",
            "text": "GZ = 12 ÷ 2 = 6 cm. One outer side is 10 + 66 + 13 = 89 cm; the other is 12 + 24 + 6 = 42 cm."
          },
          {
            "title": "Find the outer area",
            "text": "Area of ABCD = 89 × 42 = 3738 cm²."
          }
        ],
        "answerCheck": "Therefore, the answer is 3738 cm²."
      },
      "zh-Hans": {
        "strategy": "先由内长方形周长求EH，再把周围的间隔加上。",
        "steps": [
          {
            "title": "求EH",
            "text": "EFGH的周长满足2 × (EF + EH) = 180，所以EF + EH = 90，EH = 90 − 24 = 66 cm。"
          },
          {
            "title": "求外长方形的长和宽",
            "text": "GZ = 12 ÷ 2 = 6 cm。一个方向为10 + 66 + 13 = 89 cm，另一个方向为12 + 24 + 6 = 42 cm。"
          },
          {
            "title": "求外长方形面积",
            "text": "ABCD的面积 = 89 × 42 = 3738 cm²。"
          }
        ],
        "answerCheck": "所以答案是3738 cm²。"
      }
    }
  },
  {
    "id": 78,
    "topic": "Area & Perimeter",
    "question": "Mr Cox wants to put a fence around his garden. The garden is a strip 6 m wide shaped like a corner: it runs 34 m along the top, then turns and runs down the right-hand side, so the garden measures 34 m from top to bottom. It is made up of 2 similar rectangles and 3 similar squares. If it costs $23 to fence 2 m of his garden, how much will Mr Cox have to pay to fence the entire garden?",
    "answer": "$1564",
    "model": "geometry",
    "hint": "The strip is 6 m wide, so each square has a side of 6 m. The outline has 6 edges: 2 of 34 m, 2 of 28 m and 2 of 6 m. Find the cost of 1 m before multiplying.",
    "questionZh": "考克斯先生想在花园周围围篱笆。花园是一条宽6 m的地带，形状像一个拐角：先沿上边延伸34 m，然后转向沿右边向下，因此花园从上到下也是34 m。它由2个相同的长方形和3个相同的正方形组成。若给花园2 m围篱笆的费用是$23，考克斯先生给整个花园围篱笆要付多少钱？",
    "hintZh": "地带宽6 m，所以每个正方形的边长是6 m。外轮廓有6条边：2条34 m、2条28 m、2条6 m。先算出1 m的费用，再相乘。",
    "solution": {
      "en": {
        "strategy": "Find the corner strip’s perimeter from its six outer edges, then apply the fence rate.",
        "steps": [
          {
            "title": "Find the missing edge length",
            "text": "The strip is 6 m wide, so each 28 m edge is 34 − 6 = 28 m."
          },
          {
            "title": "Find the perimeter",
            "text": "The perimeter is 2 × 34 + 2 × 28 + 2 × 6 = 136 m."
          },
          {
            "title": "Find the fencing cost",
            "text": "The cost per metre is $23 ÷ 2 = $11.50. Thus the cost is 136 × $11.50 = $1564."
          }
        ],
        "answerCheck": "Therefore, the answer is $1564."
      },
      "zh-Hans": {
        "strategy": "由外轮廓的6条边求周长，再按篱笆单价计算。",
        "steps": [
          {
            "title": "求较短边",
            "text": "地带宽为6 m，所以每条28 m的边长为34 − 6 = 28 m。"
          },
          {
            "title": "求周长",
            "text": "周长 = 2 × 34 + 2 × 28 + 2 × 6 = 136 m。"
          },
          {
            "title": "求围篱笆费用",
            "text": "每米费用 = $23 ÷ 2 = $11.50。因此费用 = 136 × $11.50 = $1564。"
          }
        ],
        "answerCheck": "所以答案是$1564。"
      }
    }
  },
  {
    "id": 79,
    "topic": "2-part Word Problems",
    "question": "Mr Richard is 5 times as old as his son now. In 8 years’ time, their total ages will be 58 years. (a) What is his son’s present age? (b) How old will Mr Richard be in 8 years’ time?",
    "answer": "(a) 7 years old; (b) 43 years old",
    "model": "unit-bar",
    "hint": "Remove the 8 future years for each person from 58. Split the present total into 5 equal units for Mr Richard and 1 unit for his son.",
    "questionZh": "理查德先生现在的年龄是儿子的5倍。8年后，他们的年龄总和将是58岁。 (a) 儿子现在几岁？ (b) 8年后理查德先生几岁？",
    "hintZh": "从58中减去两人各自未来的8年。把现在年龄总和按理查德先生5等份、儿子1等份分配。",
    "solution": {
      "en": {
        "strategy": "First convert the future total age to the present total, then use the 5:1 ratio.",
        "steps": [
          {
            "title": "Find their present total",
            "text": "In 8 years, each person is 8 years older, so their present total is 58 − 8 − 8 = 42 years."
          },
          {
            "title": "Find the son’s age",
            "text": "The present ages are 5 + 1 = 6 equal parts. One part is 42 ÷ 6 = 7, so the son is 7 years old now."
          },
          {
            "title": "Find Mr Richard’s future age",
            "text": "Mr Richard is 5 × 7 = 35 years old now. In 8 years he will be 35 + 8 = 43 years old."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) 7 years old; (b) 43 years old."
      },
      "zh-Hans": {
        "strategy": "先把8年后的年龄和还原为现在的年龄和，再按5:1分配。",
        "steps": [
          {
            "title": "求现在的年龄和",
            "text": "8年后两人各增加8岁，所以现在的年龄和是58 − 8 − 8 = 42岁。"
          },
          {
            "title": "求儿子现在的年龄",
            "text": "现在的年龄比为5 + 1 = 6份。每份是42 ÷ 6 = 7，所以儿子现在7岁。"
          },
          {
            "title": "求理查德先生8年后的年龄",
            "text": "理查德先生现在是5 × 7 = 35岁。8年后是35 + 8 = 43岁。"
          }
        ],
        "answerCheck": "所以答案是(a) 7岁；(b) 43岁。"
      }
    }
  },
  {
    "id": 80,
    "topic": "2-part Word Problems",
    "question": "Jane and Mark had $240 altogether. When Jane gave Mark 1/2 of her money, Mark had 4 times as much money as Jane. (a) How much did Jane have at 1st? (b) How much did Mark have at 1st?",
    "answer": "(a) $96; (b) $144",
    "model": "money-units",
    "hint": "After Jane gives away 1/2 her money, represent Jane's remaining money as 1 unit and Mark's final money as 4 units.",
    "questionZh": "简和马克共有$240。简给马克自己钱的1/2后，马克的钱是简的4倍。 (a) 简开始时有多少钱？ (b) 马克开始时有多少钱？",
    "hintZh": "简给出自己钱的1/2后，把简剩下的钱表示为1份，马克最后的钱表示为4份。",
    "solution": {
      "en": {
        "strategy": "Use the 1:4 final-money ratio and the unchanged total.",
        "steps": [
          {
            "title": "Represent the final amounts",
            "text": "After giving away half her money, let Jane’s remaining amount be 1 unit. Mark then has 4 units, so together they have 5 units."
          },
          {
            "title": "Find the unit and Jane’s original money",
            "text": "Since the total remains $240, 1 unit = $240 ÷ 5 = $48. Jane’s remaining $48 is half her original money, so she had 2 × $48 = $96."
          },
          {
            "title": "Find Mark’s original money",
            "text": "Mark originally had $240 − $96 = $144."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) $96; (b) $144."
      },
      "zh-Hans": {
        "strategy": "利用转钱后1:4的金额比，以及总钱数不变。",
        "steps": [
          {
            "title": "表示转钱后的金额",
            "text": "简给出一半钱后，设简剩下的钱为1份。马克此时有4份，所以总共有5份。"
          },
          {
            "title": "求每份和简原有的钱",
            "text": "总钱数仍是$240，所以1份 = $240 ÷ 5 = $48。简剩下的$48是她原来钱的一半，因此她原来有2 × $48 = $96。"
          },
          {
            "title": "求马克原有的钱",
            "text": "马克原来有$240 − $96 = $144。"
          }
        ],
        "answerCheck": "所以答案是(a) $96；(b) $144。"
      }
    }
  },
  {
    "id": 81,
    "topic": "2-part Word Problems",
    "question": "Mrs Fleming spent 1/3 of her money on a handbag and 3/4 of the remainder on jewellery. She then saved the rest. If she spent $450 on a bracelet and $90 on a pair of earrings, (a) how much money did she save? (b) how much money did she have at 1st?",
    "answer": "(a) $180; (b) $1080",
    "model": "fraction-of-remainder",
    "hint": "Add the jewellery costs. This is 3/4 of the money remaining after the handbag, so the saved amount is the other 1/4.",
    "questionZh": "弗莱明太太把自己钱的1/3花在手提包上，又把剩余钱的3/4花在珠宝上，其余存起来。若她买一只手镯花$450，买一对耳环花$90，(a) 她存了多少钱？ (b) 她开始时有多少钱？",
    "hintZh": "把珠宝费用相加。这是买手提包后剩余钱的3/4，所以存款是另外的1/4。",
    "solution": {
      "en": {
        "strategy": "The jewellery cost is three quarters of the remainder; the saved money is the other quarter.",
        "steps": [
          {
            "title": "Find the jewellery total",
            "text": "Jewellery cost = $450 + $90 = $540."
          },
          {
            "title": "Find the saved money",
            "text": "$540 is 3/4 of the money left after the handbag. Thus 1/4, the saved amount, is $540 ÷ 3 = $180."
          },
          {
            "title": "Find the original money",
            "text": "The remainder after the handbag was 4 × $180 = $720, which is 2/3 of the original money. Original money = $720 ÷ 2 × 3 = $1080."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) $180; (b) $1080."
      },
      "zh-Hans": {
        "strategy": "珠宝费用是买手提包后余款的3/4，存款就是另外的1/4。",
        "steps": [
          {
            "title": "求珠宝总价",
            "text": "珠宝费用 = $450 + $90 = $540。"
          },
          {
            "title": "求存款",
            "text": "$540是买手提包后余款的3/4。因此另外的1/4，即存款，为$540 ÷ 3 = $180。"
          },
          {
            "title": "求开始时的钱",
            "text": "买手提包后的余款 = 4 × $180 = $720，这占原来钱的2/3。原来钱 = $720 ÷ 2 × 3 = $1080。"
          }
        ],
        "answerCheck": "所以答案是(a) $180；(b) $1080。"
      }
    }
  },
  {
    "id": 82,
    "topic": "2-part Word Problems",
    "question": "Sean had some money. He used 2/3 of it to buy a watch and spent 3/4 of the remainder on a wallet. If the watch cost $65 more than the wallet, (a) how much money had Sean left? (b) how much money did Sean have at 1st?",
    "answer": "(a) $13; (b) $156",
    "model": "fraction-of-remainder",
    "hint": "Let the total be 12 equal units. The watch and wallet differ by 5 units, which is $65.",
    "questionZh": "肖恩有一些钱。他用其中的2/3买手表，又把剩余钱的3/4花在钱包上。若手表比钱包贵$65，(a) 肖恩还剩多少钱？ (b) 肖恩开始时有多少钱？",
    "hintZh": "把总数设为12等份。手表和钱包相差5份，即$65。",
    "solution": {
      "en": {
        "strategy": "Express the original money as 12 equal units.",
        "steps": [
          {
            "title": "Divide the money into units",
            "text": "If the total is 12 units, the watch costs 2/3 × 12 = 8 units. The remainder is 4 units, and the wallet costs 3/4 × 4 = 3 units."
          },
          {
            "title": "Find one unit",
            "text": "The watch costs 8 − 3 = 5 units more than the wallet. Since this is $65, one unit is $65 ÷ 5 = $13."
          },
          {
            "title": "Find the requested amounts",
            "text": "Sean has 1 unit left, or $13. His original money was 12 × $13 = $156."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) $13; (b) $156."
      },
      "zh-Hans": {
        "strategy": "把开始时的钱设为12等份，方便表示各个分数。",
        "steps": [
          {
            "title": "按等份表示花费",
            "text": "总数为12份时，手表花2/3 × 12 = 8份。余下4份，钱包花3/4 × 4 = 3份。"
          },
          {
            "title": "求每一份",
            "text": "手表比钱包多花8 − 3 = 5份，这等于$65，所以1份 = $65 ÷ 5 = $13。"
          },
          {
            "title": "求所问金额",
            "text": "肖恩剩下1份，即$13。开始时的钱为12 × $13 = $156。"
          }
        ],
        "answerCheck": "所以答案是(a) $13；(b) $156。"
      }
    }
  },
  {
    "id": 83,
    "topic": "2-part Word Problems",
    "question": "1/3 of the books on a shelf are English books. 1/2 of the remainder are Chinese books and the rest are Malay books. 1/4 of the Chinese books are torn. If 54 Chinese books are not torn, (a) how many Malay books are there? (b) how many books are there altogether?",
    "answer": "(a) 72 Malay books; (b) 216 books",
    "model": "fraction-of-remainder",
    "hint": "The 54 untorn Chinese books are 3/4 of all Chinese books. Then work backwards through the shelf fractions.",
    "questionZh": "书架上1/3的书是英文书。剩余书的1/2是中文书，其余是马来文书。中文书中1/4破损。若未破损的中文书有54本，(a) 有多少本马来文书？ (b) 书架上共有多少本书？",
    "hintZh": "未破损的54本中文书占所有中文书的3/4。再根据书架上各部分的分数倒推。",
    "solution": {
      "en": {
        "strategy": "Work backward from the untorn Chinese books, then use the shelf fractions.",
        "steps": [
          {
            "title": "Find all Chinese books",
            "text": "Untorn Chinese books are 3/4 of all Chinese books. So Chinese books = 54 ÷ 3 × 4 = 72."
          },
          {
            "title": "Find Malay books",
            "text": "Chinese books are 1/2 of the books remaining after English books, so that remainder is 2 × 72 = 144. The other half is 72 Malay books."
          },
          {
            "title": "Find the total",
            "text": "The 144 non-English books are 2/3 of all books. Total books = 144 ÷ 2 × 3 = 216."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) 72 Malay books; (b) 216 books."
      },
      "zh-Hans": {
        "strategy": "从未破损的中文书倒推，再利用书架上的分数关系。",
        "steps": [
          {
            "title": "求中文书总数",
            "text": "未破损中文书占中文书的3/4，所以中文书总数 = 54 ÷ 3 × 4 = 72本。"
          },
          {
            "title": "求马来文书数",
            "text": "中文书占非英文书的1/2，因此非英文书有2 × 72 = 144本。另一半是72本马来文书。"
          },
          {
            "title": "求书的总数",
            "text": "144本非英文书占全部书的2/3。总数 = 144 ÷ 2 × 3 = 216本。"
          }
        ],
        "answerCheck": "所以答案是(a) 72本马来文书；(b) 216本书。"
      }
    }
  },
  {
    "id": 84,
    "topic": "2-part Word Problems",
    "question": "There were 250 students in a room. 2/5 of the girls and 1/10 of the boys wore spectacles. If the same number of boys and girls did not wear spectacles, (a) how many boys wore spectacles? (b) how many girls wore spectacles?",
    "answer": "(a) 10 boys; (b) 60 girls",
    "model": "unit-bar",
    "hint": "Express the fractions not wearing spectacles: 3/5 of the girls and 9/10 of the boys. Make these equal using common-sized units.",
    "questionZh": "一个房间里有250名学生。女生中2/5和男生中1/10戴眼镜。若不戴眼镜的男生和女生人数相同，(a) 有多少名男生戴眼镜？ (b) 有多少名女生戴眼镜？",
    "hintZh": "把不戴眼镜的分数表示出来：女生的3/5和男生的9/10。用大小相同的单位使两者相等。",
    "solution": {
      "en": {
        "strategy": "Set the equal numbers not wearing spectacles equal and use the total.",
        "steps": [
          {
            "title": "Write the equality",
            "text": "3/5 of the girls and 9/10 of the boys do not wear spectacles, so 3/5 G = 9/10 B."
          },
          {
            "title": "Find the numbers of boys and girls",
            "text": "Multiplying by 10 gives 6G = 9B, so 2G = 3B and G = 3/2 B. Since G + B = 250, 3/2 B + B = 250, so B = 100 and G = 150."
          },
          {
            "title": "Find spectacle wearers",
            "text": "Boys wearing spectacles = 1/10 × 100 = 10. Girls wearing spectacles = 2/5 × 150 = 60."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) 10 boys; (b) 60 girls."
      },
      "zh-Hans": {
        "strategy": "令不戴眼镜的男生和女生人数相等，再利用总人数。",
        "steps": [
          {
            "title": "列出相等关系",
            "text": "女生中3/5不戴眼镜，男生中9/10不戴眼镜，所以3/5 G = 9/10 B。"
          },
          {
            "title": "求男生和女生人数",
            "text": "两边乘10得6G = 9B，所以2G = 3B，即G = 3/2 B。又G + B = 250，故3/2 B + B = 250，B = 100，G = 150。"
          },
          {
            "title": "求戴眼镜的人数",
            "text": "戴眼镜的男生 = 1/10 × 100 = 10人。戴眼镜的女生 = 2/5 × 150 = 60人。"
          }
        ],
        "answerCheck": "所以答案是(a) 10名男生；(b) 60名女生。"
      }
    }
  },
  {
    "id": 85,
    "topic": "2-part Word Problems",
    "question": "At a football match, there were 3 times as many men as women and 2 times as many men as boys. 1/3 of the children were girls. If there were 120 girls, (a) how many boys were there? (b) how many adults were there?",
    "answer": "(a) 240 boys; (b) 640 adults",
    "model": "unit-bar",
    "hint": "Since girls are 1/3 of the children, 1st find the boys. Then use the stated ratio between men and boys.",
    "questionZh": "一场足球比赛中，男性人数是女性的3倍，男性人数是男孩的2倍。儿童中1/3是女孩。若有120名女孩，(a) 有多少名男孩？ (b) 有多少名成人？",
    "hintZh": "女孩占儿童的1/3，所以先求男孩人数。再利用男性和男孩之间给定的比例。",
    "solution": {
      "en": {
        "strategy": "Use girls as one third of all children, then use the men-to-boys and men-to-women ratios.",
        "steps": [
          {
            "title": "Find the number of boys",
            "text": "Girls are 1/3 of the children. With 120 girls, total children = 120 × 3 = 360, so boys = 360 − 120 = 240."
          },
          {
            "title": "Find men and women",
            "text": "Men are 2 times the boys, so men = 2 × 240 = 480. Men are 3 times the women, so women = 480 ÷ 3 = 160."
          },
          {
            "title": "Find adults",
            "text": "Adults = men + women = 480 + 160 = 640."
          }
        ],
        "answerCheck": "Therefore, the answer is (a) 240 boys; (b) 640 adults."
      },
      "zh-Hans": {
        "strategy": "先由女孩占儿童的1/3求男孩人数，再使用男性与男孩、女性的倍数关系。",
        "steps": [
          {
            "title": "求男孩人数",
            "text": "女孩占儿童的1/3。女孩有120人，所以儿童总数 = 120 × 3 = 360人，男孩 = 360 − 120 = 240人。"
          },
          {
            "title": "求男性和女性人数",
            "text": "男性人数是男孩的2倍，所以男性 = 2 × 240 = 480人。男性人数是女性的3倍，所以女性 = 480 ÷ 3 = 160人。"
          },
          {
            "title": "求成人总数",
            "text": "成人 = 男性 + 女性 = 480 + 160 = 640人。"
          }
        ],
        "answerCheck": "所以答案是(a) 240名男孩；(b) 640名成人。"
      }
    }
  },
  {
    "id": 86,
    "topic": "2-part Word Problems",
    "question": "2/3 of the people at a fair wore hats. 1/6 of those who wore hats were men and the rest were women. There were 124 more women than men who wore hats at the fair. (a) How many people did not wear hats? (b) How many people were there at the fair?",
    "answer": "(a) 93 people; (b) 279 people",
    "model": "unit-bar",
    "hint": "Split the hat wearers into 6 equal units — 1 unit of men and 5 units of women. Their difference is 4 units, which equals 124 people.",
    "questionZh": "集市上2/3的人戴帽子。戴帽子的人中1/6是男性，其余是女性。集市中戴帽子的女性比男性多124人。 (a) 有多少人没戴帽子？ (b) 集市上一共有多少人？",
    "hintZh": "把戴帽子的人分成6等份 —— 男性1份，女性5份。它们的差是4份，等于124人。",
    "solution": {
      "en": {
        "strategy": "Use sixths to compare the men and women who wore hats, then use the hat-wearers' fraction of all the people.",
        "steps": [
          {
            "title": "Find the number wearing hats",
            "text": "Among the hat wearers, men are 1/6 and women are 5/6. Their difference is 4/6, and this equals 124 people. So 1/6 = 124 ÷ 4 = 31 people, and the number wearing hats is 6 × 31 = 186 people."
          },
          {
            "title": "Find the whole fair",
            "text": "The 186 hat wearers are 2/3 of all the people. Therefore the total is 186 ÷ 2 × 3 = 279 people."
          },
          {
            "title": "Find those without hats",
            "text": "People who did not wear hats = 279 − 186 = 93 people."
          }
        ],
        "answerCheck": "(a) 93 people; (b) 279 people"
      },
      "zh-Hans": {
        "strategy": "先把戴帽子的男性和女性按6等份比较，再利用戴帽子的人占总人数的2/3求总人数。",
        "steps": [
          {
            "title": "求戴帽子的人数",
            "text": "戴帽子的人中，男性占1/6，女性占5/6，相差4/6，等于124人。所以1/6 = 124 ÷ 4 = 31人，戴帽子的人数是6 × 31 = 186人。"
          },
          {
            "title": "求集市总人数",
            "text": "186个戴帽子的人是总人数的2/3。因此总人数 = 186 ÷ 2 × 3 = 279人。"
          },
          {
            "title": "求没戴帽子的人数",
            "text": "没戴帽子的人数 = 279 − 186 = 93人。"
          }
        ],
        "answerCheck": "所以(a)有93人没戴帽子；(b)集市上共有279人。"
      }
    }
  },
  {
    "id": 87,
    "topic": "2-part Word Problems",
    "question": "2 numbers are written on a piece of paper. 1/5 of the 1st number is 12 more than 1/2 of the 2nd number. The sum of the 2 numbers is 221. (a) What is the 1st number? (b) What is the 2nd number?",
    "answer": "(a) 175; (b) 46",
    "model": "unit-bar",
    "hint": "Use a common unit for 1/5 of the 1st number and 1/2 of the 2nd number. The 12-unit difference helps split their total.",
    "questionZh": "一张纸上写着2个数。第1个数的1/5比第2个数的1/2多12。两个数的和是221。 (a) 第1个数是多少？ (b) 第2个数是多少？",
    "hintZh": "把第1个数的1/5和第2个数的1/2用同一单位表示。相差的12个单位有助于把总数分开。",
    "solution": {
      "en": {
        "strategy": "Write an equation for the fractional comparison and combine it with the given total.",
        "steps": [
          {
            "title": "Set up the relationship",
            "text": "Let the 1st number be x and the 2nd number be y. Since 1/5 of the 1st is 12 more than 1/2 of the 2nd, x/5 = y/2 + 12. Multiplying by 10 gives 2x − 5y = 120."
          },
          {
            "title": "Use the sum",
            "text": "The two numbers total 221, so x + y = 221 and x = 221 − y. Substitute: 2(221 − y) − 5y = 120."
          },
          {
            "title": "Solve for both numbers",
            "text": "442 − 7y = 120, so 7y = 322 and y = 46. Then x = 221 − 46 = 175."
          }
        ],
        "answerCheck": "(a) 175; (b) 46"
      },
      "zh-Hans": {
        "strategy": "把分数比较写成方程，并与两个数的和联立求解。",
        "steps": [
          {
            "title": "列出数量关系",
            "text": "设第1个数为x，第2个数为y。因为第1个数的1/5比第2个数的1/2多12，所以x/5 = y/2 + 12。两边乘10，得2x − 5y = 120。"
          },
          {
            "title": "利用总和",
            "text": "两个数的和为221，所以x + y = 221，即x = 221 − y。代入得2(221 − y) − 5y = 120。"
          },
          {
            "title": "求两个数",
            "text": "442 − 7y = 120，所以7y = 322，y = 46。于是x = 221 − 46 = 175。"
          }
        ],
        "answerCheck": "所以(a)第1个数是175；(b)第2个数是46。"
      }
    }
  },
  {
    "id": 88,
    "topic": "2-part Word Problems",
    "question": "Gracia had some pens. 2/5 of the pens were blue and 1/6 of the remainder were black. The rest were red and green. There were 12 more red pens than blue pens. If there were 24 green pens, (a) how many red and blue pens did Gracia have? (b) how many pens did Gracia have altogether?",
    "answer": "(a) 300 red and blue pens; (b) 360 pens",
    "model": "fraction-of-remainder",
    "hint": "Represent all pens with 30 equal units so both 2/5 and 1/6 can be shown exactly. Use the 12 difference to find 1 unit.",
    "questionZh": "格拉西亚有一些笔。其中2/5是蓝色的，剩余笔的1/6是黑色的，其余是红色和绿色的。红笔比蓝笔多12支。若有24支绿笔，(a) 格拉西亚有多少支红笔和蓝笔？ (b) 格拉西亚一共有多少支笔？",
    "hintZh": "把所有笔表示为30等份，便能准确表示2/5和1/6。利用相差的12支笔求1份。",
    "solution": {
      "en": {
        "strategy": "Represent all the pens by 30 equal units so that both fractions can be used exactly.",
        "steps": [
          {
            "title": "Express each colour in units",
            "text": "Let all the pens be 30 units. Blue pens are 2/5 × 30 = 12 units. Of the 18 units left, black pens are 1/6 × 18 = 3 units. Thus red and green pens together are 30 − 12 − 3 = 15 units."
          },
          {
            "title": "Use the red-blue difference",
            "text": "Red pens are 12 more than blue pens. Since blue is 12 units, red is 12 units plus 12 pens. Green is 24 pens, so red and green total 12 units + 12 + 24 = 15 units. Hence 3 units = 36 pens and 1 unit = 12 pens."
          },
          {
            "title": "Find the requested totals",
            "text": "Blue = 12 × 12 = 144 pens and red = 144 + 12 = 156 pens, so red and blue total 300 pens. All pens = 30 × 12 = 360 pens."
          }
        ],
        "answerCheck": "(a) 300 red and blue pens; (b) 360 pens"
      },
      "zh-Hans": {
        "strategy": "把全部笔看成30等份，这样2/5和剩余部分的1/6都能准确表示。",
        "steps": [
          {
            "title": "用份数表示各种颜色",
            "text": "设全部笔有30份。蓝笔占2/5 × 30 = 12份。剩下18份，其中黑笔占1/6 × 18 = 3份。所以红笔和绿笔合起来有30 − 12 − 3 = 15份。"
          },
          {
            "title": "利用红蓝笔相差12支",
            "text": "蓝笔是12份，红笔比蓝笔多12支，所以红笔是12份加12支。绿笔有24支，因此红笔和绿笔共12份 + 12支 + 24支 = 15份。由此3份 = 36支，1份 = 12支。"
          },
          {
            "title": "求所需数量",
            "text": "蓝笔 = 12 × 12 = 144支，红笔 = 144 + 12 = 156支，所以红笔和蓝笔共300支。全部笔 = 30 × 12 = 360支。"
          }
        ],
        "answerCheck": "所以(a)红笔和蓝笔共有300支；(b)一共有360支笔。"
      }
    }
  },
  {
    "id": 89,
    "topic": "2-part Word Problems",
    "question": "The total number of oranges in cartons A and B was 324. When 3/7 of the oranges in carton A were sold, there were 2 times as many oranges in carton A than in carton B. (a) How many oranges were there in carton A at 1st? (b) How many oranges were there in carton B at 1st?",
    "answer": "(a) 252 oranges; (b) 72 oranges",
    "model": "bar-change",
    "hint": "After the sale, carton A has 4/7 of its original oranges and is 2 times carton B. Turn the final ratio into original units.",
    "questionZh": "A箱和B箱的橙子总数是324个。卖出A箱橙子的3/7后，A箱橙子数量是B箱的2倍。 (a) A箱开始时有多少个橙子？ (b) B箱开始时有多少个橙子？",
    "hintZh": "卖出后，A箱剩原来橙子的4/7，且数量是B箱的2倍。把最后的比例转换为原来的份数。",
    "solution": {
      "en": {
        "strategy": "Convert the after-sale ratio into original fractional units for carton A and carton B.",
        "steps": [
          {
            "title": "Form the original ratio",
            "text": "After 3/7 of carton A is sold, 4/7 of A remains. This remaining amount is twice carton B, so 4/7 of A : B = 2 : 1. Therefore A : B = 7 : 2."
          },
          {
            "title": "Find one ratio unit",
            "text": "The total 324 oranges represents 7 + 2 = 9 equal units. One unit is 324 ÷ 9 = 36 oranges."
          },
          {
            "title": "Find each carton",
            "text": "Carton A had 7 × 36 = 252 oranges at first. Carton B had 2 × 36 = 72 oranges at first."
          }
        ],
        "answerCheck": "(a) 252 oranges; (b) 72 oranges"
      },
      "zh-Hans": {
        "strategy": "把卖出后的比例换成A箱和B箱原来数量的比例。",
        "steps": [
          {
            "title": "建立原来的比例",
            "text": "A箱卖出3/7后，剩下原来的4/7。剩下的A箱橙子是B箱的2倍，所以4/7的A箱 : B箱 = 2 : 1。因此A箱 : B箱 = 7 : 2。"
          },
          {
            "title": "求每一份",
            "text": "324个橙子共有7 + 2 = 9份。每份 = 324 ÷ 9 = 36个。"
          },
          {
            "title": "求两箱开始时的数量",
            "text": "A箱开始时有7 × 36 = 252个橙子。B箱开始时有2 × 36 = 72个橙子。"
          }
        ],
        "answerCheck": "所以(a)A箱开始时有252个橙子；(b)B箱开始时有72个橙子。"
      }
    }
  },
  {
    "id": 90,
    "topic": "2-part Word Problems",
    "question": "On Monday, Mr Hall sold 246 lemons and Mr Clement sold 1/2 as many lemons as Mr Hall. On Tuesday, Mr Hall sold 83 lemons and Mr Clement sold some lemons. The total number of lemons sold by Mr Clement over the 2 days was 4/7 the number that Mr Hall sold. (a) How many lemons did Mr Clement sell on Tuesday? (b) How many lemons did both men sell altogether on both days?",
    "answer": "(a) 65 lemons; (b) 517 lemons",
    "model": "unit-bar",
    "hint": "Find Mr Hall's 2-day total 1st. Use 4/7 of that total for Mr Clement's 2-day sales, then remove his Monday sales.",
    "questionZh": "星期一，霍尔先生卖出246个柠檬，克莱门特先生卖出的柠檬数是霍尔先生的1/2。星期二，霍尔先生卖出83个柠檬，克莱门特先生卖出一些柠檬。2天内克莱门特先生卖出的柠檬总数是霍尔先生卖出总数的4/7。 (a) 克莱门特先生星期二卖出多少个柠檬？ (b) 两人2天共卖出多少个柠檬？",
    "hintZh": "先求霍尔先生2天的总数。用该总数的4/7求克莱门特先生2天的销量，再减去他星期一卖出的数量。",
    "solution": {
      "en": {
        "strategy": "Find Mr Hall's two-day total first, then use the 4/7 relationship to find Mr Clement's total.",
        "steps": [
          {
            "title": "Find Mr Hall's total",
            "text": "Mr Hall sold 246 + 83 = 329 lemons over the two days."
          },
          {
            "title": "Find Mr Clement's two-day total",
            "text": "Mr Clement sold 4/7 of Mr Hall's total: 4/7 × 329 = 188 lemons. On Monday he sold 1/2 × 246 = 123 lemons."
          },
          {
            "title": "Find Tuesday and the combined sales",
            "text": "Mr Clement's Tuesday sales were 188 − 123 = 65 lemons. Together, both men sold 329 + 188 = 517 lemons."
          }
        ],
        "answerCheck": "(a) 65 lemons; (b) 517 lemons"
      },
      "zh-Hans": {
        "strategy": "先求霍尔先生两天的销量，再按4/7的关系求克莱门特先生两天的销量。",
        "steps": [
          {
            "title": "求霍尔先生两天的总数",
            "text": "霍尔先生两天共卖出246 + 83 = 329个柠檬。"
          },
          {
            "title": "求克莱门特先生两天的总数",
            "text": "克莱门特先生两天卖出霍尔先生总数的4/7，即4/7 × 329 = 188个柠檬。星期一他卖出1/2 × 246 = 123个。"
          },
          {
            "title": "求星期二和合计",
            "text": "克莱门特先生星期二卖出188 − 123 = 65个柠檬。两人两天共卖出329 + 188 = 517个柠檬。"
          }
        ],
        "answerCheck": "所以(a)克莱门特先生星期二卖出65个柠檬；(b)两人两天共卖出517个柠檬。"
      }
    }
  },
  {
    "id": 91,
    "topic": "2-part Word Problems",
    "question": "Cleo and Diana were given the same amount of money each day. Cleo spent 4/7 of her money and Diana spent 2/3 of her money every day. They then saved the rest of their money. After a week, Cleo saved $56 more than Diana. (a) How much money did Cleo spend a day? (b) How much money did Diana spend a day?",
    "answer": "(a) $48; (b) $56",
    "model": "fraction-of-remainder",
    "hint": "Convert the weekly saving difference to a 1-day difference. Compare the saving fractions, 3/7 and 1/3, using a common denominator.",
    "questionZh": "克莱奥和戴安娜每天得到同样多的钱。克莱奥每天花掉自己钱的4/7，戴安娜每天花掉自己钱的2/3，然后存下其余的钱。一周后，克莱奥比戴安娜多存$56。 (a) 克莱奥每天花多少钱？ (b) 戴安娜每天花多少钱？",
    "hintZh": "把每周储蓄差额换算为1天的差额。用公分母比较3/7和1/3这两个储蓄分数。",
    "solution": {
      "en": {
        "strategy": "Turn the weekly saving difference into a daily difference, then compare the daily saving fractions.",
        "steps": [
          {
            "title": "Find the daily saving difference",
            "text": "Over 7 days, Cleo saved $56 more. Therefore she saved $56 ÷ 7 = $8 more per day."
          },
          {
            "title": "Find the daily allowance",
            "text": "Cleo saved 1 − 4/7 = 3/7 of her daily money. Diana saved 1 − 2/3 = 1/3. Their saving difference is 3/7 − 1/3 = 2/21 of the daily amount. Thus 2/21 of the daily amount is $8, so the daily amount is $8 × 21 ÷ 2 = $84."
          },
          {
            "title": "Find each daily spending amount",
            "text": "Cleo spent 4/7 × $84 = $48 per day. Diana spent 2/3 × $84 = $56 per day."
          }
        ],
        "answerCheck": "(a) $48; (b) $56"
      },
      "zh-Hans": {
        "strategy": "先把一周的储蓄差换算成每天的差，再比较每天的储蓄分数。",
        "steps": [
          {
            "title": "求每天储蓄相差多少",
            "text": "7天后克莱奥多存$56，所以她每天多存$56 ÷ 7 = $8。"
          },
          {
            "title": "求每天得到的钱",
            "text": "克莱奥每天存下1 − 4/7 = 3/7，戴安娜每天存下1 − 2/3 = 1/3。两人的储蓄差为3/7 − 1/3 = 2/21。故每天钱数的2/21是$8，每天得到的钱 = $8 × 21 ÷ 2 = $84。"
          },
          {
            "title": "求每天花的钱",
            "text": "克莱奥每天花4/7 × $84 = $48。戴安娜每天花2/3 × $84 = $56。"
          }
        ],
        "answerCheck": "所以(a)克莱奥每天花$48；(b)戴安娜每天花$56。"
      }
    }
  },
  {
    "id": 92,
    "topic": "2-part Word Problems",
    "question": "A box of apples costs 2/7 the price of a box of oranges. There are 1/3 as many apples as oranges in 1 box. If there are 90 oranges in 1 box and an orange costs 70¢, (a) how much does a box of apples cost? (b) how many apples are there in 1 box?",
    "answer": "(a) $18; (b) 30 apples",
    "model": "unit-bar",
    "hint": "1st find the price of a box of oranges from 90 oranges. Then take 2/7 of that price; 1/3 of 90 gives the apple count.",
    "questionZh": "一箱苹果的价钱是一箱橙子价钱的2/7。1箱苹果中苹果的数量是1箱橙子中橙子数量的1/3。若1箱橙子有90个橙子，每个橙子70¢，(a) 一箱苹果多少钱？ (b) 1箱苹果有多少个苹果？",
    "hintZh": "先由90个橙子求一箱橙子的价格，再取该价格的2/7；90的1/3就是苹果数量。",
    "solution": {
      "en": {
        "strategy": "Find the orange-box price from the unit price, then apply the given price and quantity fractions.",
        "steps": [
          {
            "title": "Find the orange-box price",
            "text": "A box contains 90 oranges at 70¢ each, so its price is 90 × 70¢ = 6300¢ = $63."
          },
          {
            "title": "Find the apple-box price",
            "text": "A box of apples costs 2/7 of $63: 2/7 × $63 = $18."
          },
          {
            "title": "Find the number of apples",
            "text": "The apple count is 1/3 of 90 oranges: 1/3 × 90 = 30 apples."
          }
        ],
        "answerCheck": "(a) $18; (b) 30 apples"
      },
      "zh-Hans": {
        "strategy": "先由每个橙子的价钱求一箱橙子的价钱，再用题目给出的价钱和数量分数。",
        "steps": [
          {
            "title": "求一箱橙子的价钱",
            "text": "一箱有90个橙子，每个70¢，所以一箱橙子的价钱 = 90 × 70¢ = 6300¢ = $63。"
          },
          {
            "title": "求一箱苹果的价钱",
            "text": "一箱苹果的价钱是一箱橙子的2/7，即2/7 × $63 = $18。"
          },
          {
            "title": "求一箱苹果的数量",
            "text": "苹果数量是90的1/3，即1/3 × 90 = 30个苹果。"
          }
        ],
        "answerCheck": "所以(a)一箱苹果价钱是$18；(b)一箱有30个苹果。"
      }
    }
  },
  {
    "id": 93,
    "topic": "2-part Word Problems",
    "question": "Katherine and Leslie had a total of 140 sweets. When Leslie gave Katherine 1/4 of his sweets and Katherine ate 5 of her sweets, Katherine had 2 times as many sweets as Leslie. (a) How many sweets did Leslie have at 1st? (b) How many sweets did Katherine have at 1st?",
    "answer": "(a) 60 sweets; (b) 80 sweets",
    "model": "bar-change",
    "hint": "After the transfer and Katherine's 5 eaten sweets, compare their final amounts as 2 units and 1 unit. Account for the 5 separately.",
    "questionZh": "凯瑟琳和莱斯利共有140颗糖。莱斯利把自己糖的1/4给凯瑟琳，凯瑟琳又吃掉5颗糖后，凯瑟琳的糖是莱斯利的2倍。 (a) 莱斯利开始时有多少颗糖？ (b) 凯瑟琳开始时有多少颗糖？",
    "hintZh": "转移以及凯瑟琳吃掉5颗糖后，把两人最后的数量比较为2份和1份。5颗糖要另行考虑。",
    "solution": {
      "en": {
        "strategy": "Use the final 2:1 ratio after the transfer and Katherine's 5 sweets were eaten, then work backward.",
        "steps": [
          {
            "title": "Find the final amounts",
            "text": "After Katherine ate 5 sweets, the two people had 140 − 5 = 135 sweets altogether. Katherine then had twice Leslie's amount, so the final ratio is 2 : 1. Leslie had 135 ÷ 3 = 45 sweets and Katherine had 2 × 45 = 90 sweets."
          },
          {
            "title": "Work back to Leslie's starting amount",
            "text": "Leslie gave away 1/4 of his sweets, so his 45 sweets left were 3/4 of his starting amount. His starting amount was 45 ÷ 3 × 4 = 60 sweets."
          },
          {
            "title": "Find Katherine's starting amount",
            "text": "Katherine started with 140 − 60 = 80 sweets. Check: she received 15, then ate 5, leaving 80 + 15 − 5 = 90 sweets."
          }
        ],
        "answerCheck": "(a) 60 sweets; (b) 80 sweets"
      },
      "zh-Hans": {
        "strategy": "利用转移糖果和凯瑟琳吃掉5颗糖后形成的2:1比例，再倒推原来的数量。",
        "steps": [
          {
            "title": "求最后两人的糖果数",
            "text": "凯瑟琳吃掉5颗糖后，两人共有140 − 5 = 135颗糖。此时凯瑟琳的糖是莱斯利的2倍，比例为2:1。莱斯利有135 ÷ 3 = 45颗，凯瑟琳有2 × 45 = 90颗。"
          },
          {
            "title": "倒推莱斯利原有的糖",
            "text": "莱斯利给出自己糖的1/4后，剩下的45颗是原来的3/4。因此他开始时有45 ÷ 3 × 4 = 60颗糖。"
          },
          {
            "title": "求凯瑟琳原有的糖",
            "text": "凯瑟琳开始时有140 − 60 = 80颗糖。验算：她收到15颗后吃掉5颗，剩80 + 15 − 5 = 90颗。"
          }
        ],
        "answerCheck": "所以(a)莱斯利开始时有60颗糖；(b)凯瑟琳开始时有80颗糖。"
      }
    }
  },
  {
    "id": 94,
    "topic": "2-part Word Problems",
    "question": "There were some pears and apples in a box. If 4 pears were taken out from the box, there would be an equal number of pears and apples in the box. If 7 pears were taken out from the box, there would be 4/5 as many pears as apples in the box. (a) How many apples were there in the box at 1st? (b) How many pears were there in the box at 1st?",
    "answer": "(a) 15 apples; (b) 19 pears",
    "model": "bar-change",
    "hint": "The 1st condition says the original number of pears is 4 more than apples. Substitute that relationship into the 2nd condition.",
    "questionZh": "一个盒子里有一些梨和苹果。若从盒子中取出4个梨，盒中梨和苹果数量相等。若取出7个梨，盒中梨的数量是苹果的4/5。 (a) 开始时有多少个苹果？ (b) 开始时有多少个梨？",
    "hintZh": "第1个条件表明原来梨的数量比苹果多4。把这个关系代入第2个条件。",
    "solution": {
      "en": {
        "strategy": "Use the first condition to express pears in terms of apples, then substitute into the second condition.",
        "steps": [
          {
            "title": "Relate the original amounts",
            "text": "Taking out 4 pears leaves the same number of pears as apples. Therefore the original number of pears was 4 more than the number of apples."
          },
          {
            "title": "Use the second condition",
            "text": "Let the original number of apples be A. Then the original number of pears is A + 4. After 7 pears are taken out, there are A − 3 pears, and this is 4/5 as many as the apples: A − 3 = 4/5A."
          },
          {
            "title": "Solve for both fruits",
            "text": "A − 4/5A = 3, so 1/5A = 3 and A = 15. The number of pears was 15 + 4 = 19."
          }
        ],
        "answerCheck": "(a) 15 apples; (b) 19 pears"
      },
      "zh-Hans": {
        "strategy": "先由第一个条件把梨的数量表示成苹果的数量，再代入第二个条件。",
        "steps": [
          {
            "title": "建立原来数量的关系",
            "text": "取出4个梨后，梨和苹果一样多。因此原来梨的数量比苹果多4个。"
          },
          {
            "title": "使用第二个条件",
            "text": "设原来有A个苹果，则原来有A + 4个梨。取出7个梨后剩A − 3个梨，它是苹果数量的4/5，所以A − 3 = 4/5A。"
          },
          {
            "title": "求两种水果的数量",
            "text": "A − 4/5A = 3，所以1/5A = 3，A = 15。梨的数量为15 + 4 = 19。"
          }
        ],
        "answerCheck": "所以(a)开始时有15个苹果；(b)开始时有19个梨。"
      }
    }
  },
  {
    "id": 95,
    "topic": "2-part Word Problems",
    "question": "There were some spectators at a tennis match. 1/3 of them belonged to the tennis club. 1/6 of those who did not belong to the club were adults and the rest were children. If there were 120 more children than adults who did not belong to the club, (a) how many people belonged to the tennis club? (b) how many spectators were there at the tennis match?",
    "answer": "(a) 90 people; (b) 270 spectators",
    "model": "unit-bar",
    "hint": "Among non-members, adults are 1 unit and children are 5 units. Use their 4-unit difference, then relate non-members to the 1/3 club members.",
    "questionZh": "一场网球比赛有一些观众。其中1/3属于网球俱乐部。不属于俱乐部的人中，1/6是成人，其余是儿童。若不属于俱乐部的儿童比成人多120人，(a) 有多少人属于网球俱乐部？ (b) 网球比赛有多少名观众？",
    "hintZh": "在非会员中，成人是1份，儿童是5份。利用相差的4份，再把非会员与占1/3的俱乐部会员联系起来。",
    "solution": {
      "en": {
        "strategy": "Split the non-members into sixths, then use the fact that non-members are 2/3 of all spectators.",
        "steps": [
          {
            "title": "Find the number of non-members",
            "text": "Among the non-members, adults are 1/6 and children are 5/6. Their difference is 4/6 and equals 120 people. Thus 1/6 = 120 ÷ 4 = 30 people, so there are 6 × 30 = 180 non-members."
          },
          {
            "title": "Find the total number of spectators",
            "text": "Since 1/3 belong to the club, 2/3 do not belong. The 180 non-members are 2/3 of the spectators, so the total is 180 ÷ 2 × 3 = 270 spectators."
          },
          {
            "title": "Find club members",
            "text": "The number belonging to the club is 1/3 × 270 = 90 people."
          }
        ],
        "answerCheck": "(a) 90 people; (b) 270 spectators"
      },
      "zh-Hans": {
        "strategy": "把非会员按6等份分开，再利用非会员占总观众人数的2/3。",
        "steps": [
          {
            "title": "求非会员人数",
            "text": "在非会员中，成人占1/6，儿童占5/6，相差4/6，等于120人。所以1/6 = 120 ÷ 4 = 30人，非会员共有6 × 30 = 180人。"
          },
          {
            "title": "求观众总人数",
            "text": "俱乐部会员占1/3，因此非会员占2/3。180名非会员是观众的2/3，所以观众总数 = 180 ÷ 2 × 3 = 270名。"
          },
          {
            "title": "求俱乐部会员人数",
            "text": "属于俱乐部的人数 = 1/3 × 270 = 90人。"
          }
        ],
        "answerCheck": "所以(a)有90人属于网球俱乐部；(b)共有270名观众。"
      }
    }
  },
  {
    "id": 96,
    "topic": "2-part Word Problems",
    "question": "5 apples cost as much as 2 papayas. Mrs Lynch could buy 18 papayas. If she had bought 12 papayas, she would have $30 left. (a) How much did each papaya cost? (b) How much would 3 apples and 3 papayas cost?",
    "answer": "(a) $5; (b) $21",
    "model": "money-units",
    "hint": "The $30 left equals the price of 6 papayas. Then use 5 apples = 2 papayas to find the apple price.",
    "questionZh": "5个苹果的价钱等于2个木瓜的价钱。林奇太太的钱可以买18个木瓜。若她买12个木瓜，会剩$30。 (a) 每个木瓜多少钱？ (b) 3个苹果和3个木瓜共多少钱？",
    "hintZh": "剩下的$30等于6个木瓜的价钱。再利用5个苹果 = 2个木瓜，求苹果的价钱。",
    "solution": {
      "en": {
        "strategy": "Use the $30 left as the cost of the 6 papayas not bought, then use the apple-papaya cost relationship.",
        "steps": [
          {
            "title": "Find the papaya price",
            "text": "Mrs Lynch could buy 18 papayas, but buying 12 would leave $30. The $30 is the cost of 18 − 12 = 6 papayas. Each papaya costs $30 ÷ 6 = $5."
          },
          {
            "title": "Find the apple price",
            "text": "Two papayas cost 2 × $5 = $10. Since 5 apples cost as much as 2 papayas, one apple costs $10 ÷ 5 = $2."
          },
          {
            "title": "Find the combined cost",
            "text": "Three apples and three papayas cost 3 × $2 + 3 × $5 = $6 + $15 = $21."
          }
        ],
        "answerCheck": "(a) $5; (b) $21"
      },
      "zh-Hans": {
        "strategy": "把剩下的$30看作没有买的6个木瓜的价钱，再利用苹果和木瓜的价钱关系。",
        "steps": [
          {
            "title": "求每个木瓜的价钱",
            "text": "林奇太太本可买18个木瓜；买12个会剩$30。这$30是18 − 12 = 6个木瓜的价钱，所以每个木瓜 = $30 ÷ 6 = $5。"
          },
          {
            "title": "求每个苹果的价钱",
            "text": "2个木瓜值2 × $5 = $10。5个苹果和2个木瓜一样贵，所以每个苹果 = $10 ÷ 5 = $2。"
          },
          {
            "title": "求3个苹果和3个木瓜的总价",
            "text": "3个苹果和3个木瓜的价钱 = 3 × $2 + 3 × $5 = $6 + $15 = $21。"
          }
        ],
        "answerCheck": "所以(a)每个木瓜是$5；(b)3个苹果和3个木瓜共$21。"
      }
    }
  },
  {
    "id": 97,
    "topic": "2-part Word Problems",
    "question": "Joey had some 20-cent and 10-cent coins. When she used 1/3 of them, she had $9.60 left. She used 1/2 as many 20-cent coins as 10-cent coins. (a) How many 20-cent coins did she use? (b) How many 10-cent coins did she use?",
    "answer": "(a) 12 twenty-cent coins; (b) 24 ten-cent coins",
    "model": "money-units",
    "hint": "If 1/3 was used, the $9.60 remaining is 2/3 of the total value. Find the amount used, then test the 1:2 coin-count ratio.",
    "questionZh": "乔伊有一些20分和10分硬币。她用掉其中的1/3后，还剩$9.60。她用掉的20分硬币数量是10分硬币数量的1/2。 (a) 她用了多少枚20分硬币？ (b) 她用了多少枚10分硬币？",
    "hintZh": "若用掉1/3，剩下的$9.60就是总价值的2/3。先求用掉的金额，再检验硬币枚数的1:2比例。",
    "solution": {
      "en": {
        "strategy": "Find the value of the coins used, then apply the 1:2 ratio of 20-cent to 10-cent coins used.",
        "steps": [
          {
            "title": "Find the value used",
            "text": "The $9.60 left is 2/3 of the original value because 1/3 was used. The original value was $9.60 ÷ 2 × 3 = $14.40, so the value used was $14.40 − $9.60 = $4.80."
          },
          {
            "title": "Use the coin-count ratio",
            "text": "Let the number of 20-cent coins used be x. She used twice as many 10-cent coins, or 2x. Their value is 20x cents + 10(2x) cents = 40x cents."
          },
          {
            "title": "Solve for the coin counts",
            "text": "$4.80 = 480 cents, so 40x = 480 and x = 12. Thus she used 12 twenty-cent coins and 2 × 12 = 24 ten-cent coins."
          }
        ],
        "answerCheck": "(a) 12 twenty-cent coins; (b) 24 ten-cent coins"
      },
      "zh-Hans": {
        "strategy": "先求用掉的硬币总值，再利用用掉的20分硬币和10分硬币的1:2数量比。",
        "steps": [
          {
            "title": "求用掉的金额",
            "text": "剩下的$9.60是原来总值的2/3，因为用掉了1/3。原来总值 = $9.60 ÷ 2 × 3 = $14.40，所以用掉的金额 = $14.40 − $9.60 = $4.80。"
          },
          {
            "title": "利用硬币数量比",
            "text": "设用掉x枚20分硬币，则用掉2x枚10分硬币。它们的总值为20x分 + 10(2x)分 = 40x分。"
          },
          {
            "title": "求硬币枚数",
            "text": "$4.80 = 480分，所以40x = 480，x = 12。因此用掉12枚20分硬币和2 × 12 = 24枚10分硬币。"
          }
        ],
        "answerCheck": "所以(a)用了12枚20分硬币；(b)用了24枚10分硬币。"
      }
    }
  },
  {
    "id": 98,
    "topic": "2-part Word Problems",
    "question": "James spent 1/5 of his money on a pair of shoes and 1/10 on a book. He saved 2/7 of the remaining money and the rest of the money was given to and shared equally among his 8 brothers. If each brother received $5, (a) how much money did James have at 1st? (b) how much money did James spend?",
    "answer": "(a) $80; (b) $24",
    "model": "fraction-of-remainder",
    "hint": "The brothers received $40 altogether. It is 5 equal parts of the money remaining after the 1st 2 purchases; use that to work back.",
    "questionZh": "詹姆斯把自己钱的1/5花在一双鞋上，1/10花在一本书上。他把剩余钱的2/7存起来，其余的钱给了8个兄弟并由他们平均分。若每个兄弟得到$5，(a) 詹姆斯开始时有多少钱？ (b) 詹姆斯花了多少钱？",
    "hintZh": "兄弟们一共得到$40。这是前2次购买后剩余钱的5等份；利用这一点倒推。",
    "solution": {
      "en": {
        "strategy": "Find the brothers' combined share, then work backward through the fraction saved from the money remaining after spending.",
        "steps": [
          {
            "title": "Find the amount given to the brothers",
            "text": "The 8 brothers received 8 × $5 = $40 altogether."
          },
          {
            "title": "Relate this to James's original money",
            "text": "James spent 1/5 + 1/10 = 3/10 of his money, leaving 7/10. He saved 2/7 of this remainder, so he gave the brothers the other 5/7. Thus the $40 given is 5/7 × 7/10 = 1/2 of his original money."
          },
          {
            "title": "Find the original amount and spending",
            "text": "If 1/2 is $40, the original amount was $80. He spent 3/10 × $80 = $24."
          }
        ],
        "answerCheck": "(a) $80; (b) $24"
      },
      "zh-Hans": {
        "strategy": "先求8个兄弟一共得到的钱，再从前两次花钱后剩余的钱中存下的分数倒推。",
        "steps": [
          {
            "title": "求给兄弟们的钱",
            "text": "8个兄弟每人得到$5，共得到8 × $5 = $40。"
          },
          {
            "title": "把这笔钱和原有的钱联系起来",
            "text": "詹姆斯花了原有钱的1/5 + 1/10 = 3/10，剩下7/10。他把剩余钱的2/7存起来，给兄弟们的是其余的5/7。因此给出的$40 = 5/7 × 7/10 = 原有钱的1/2。"
          },
          {
            "title": "求原有的钱和花掉的钱",
            "text": "原有钱的1/2是$40，所以开始时有$80。他花了3/10 × $80 = $24。"
          }
        ],
        "answerCheck": "所以(a)詹姆斯开始时有$80；(b)他花了$24。"
      }
    }
  },
  {
    "id": 99,
    "topic": "2-part Word Problems",
    "question": "Vivian and her brother had some money. After spending 2/5 of his money, her brother had $78 left. Vivian spent 1/3 of her money and had the same amount of money left as her brother. (a) How much money did Vivian have at 1st? (b) How much money did Vivian’s brother have at 1st?",
    "answer": "(a) $117; (b) $130",
    "model": "fraction-of-remainder",
    "hint": "Vivian's $78 is 2/3 of her starting money, while her brother's $78 is 3/5 of his starting money.",
    "questionZh": "薇薇安和哥哥有一些钱。哥哥花掉自己钱的2/5后，还剩$78。薇薇安花掉自己钱的1/3后，剩下的钱与哥哥相同。 (a) 薇薇安开始时有多少钱？ (b) 薇薇安的哥哥开始时有多少钱？",
    "hintZh": "薇薇安的$78是她开始时钱的2/3，而哥哥的$78是他开始时钱的3/5。",
    "solution": {
      "en": {
        "strategy": "Use the common $78 left by both people and reverse each person's spending fraction.",
        "steps": [
          {
            "title": "Find Vivian's starting amount",
            "text": "After spending 1/3, Vivian had 2/3 of her money left. Since this was $78, her starting amount was $78 ÷ 2 × 3 = $117."
          },
          {
            "title": "Find her brother's starting amount",
            "text": "After spending 2/5, Vivian's brother had 3/5 of his money left. Since this was $78, his starting amount was $78 ÷ 3 × 5 = $130."
          }
        ],
        "answerCheck": "(a) $117; (b) $130"
      },
      "zh-Hans": {
        "strategy": "利用两人最后都剩下的$78，分别按各自花掉的分数倒推。",
        "steps": [
          {
            "title": "求薇薇安开始时的钱",
            "text": "薇薇安花掉1/3后，剩下原有钱的2/3。这个数是$78，所以她开始时有$78 ÷ 2 × 3 = $117。"
          },
          {
            "title": "求哥哥开始时的钱",
            "text": "哥哥花掉2/5后，剩下原有钱的3/5。这个数是$78，所以他开始时有$78 ÷ 3 × 5 = $130。"
          }
        ],
        "answerCheck": "所以(a)薇薇安开始时有$117；(b)她哥哥开始时有$130。"
      }
    }
  },
  {
    "id": 100,
    "topic": "2-part Word Problems",
    "question": "A piece of wire is cut into 2 equal pieces. 1 piece is bent to form 2 similar squares with sides 12 cm. The other piece is bent into 3 similar rectangles, each with a breadth of 6 cm. (a) Find the length of the piece of wire at 1st. (b) Find the area of each rectangle.",
    "answer": "(a) 192 cm; (b) 60 cm²",
    "model": "geometry",
    "hint": "2 squares with sides of 12 cm use 96 cm of wire. That is 1/2 of the original wire, and it is also the wire used for the 3 rectangles.",
    "questionZh": "一根铁丝被剪成2段相等的长度。其中1段弯成2个边长12 cm的相同正方形；另一段弯成3个相同长方形，每个长方形的宽是6 cm。 (a) 求这根铁丝开始时的长度。 (b) 求每个长方形的面积。",
    "hintZh": "2个边长12 cm的正方形用去96 cm铁丝。这是原来铁丝的1/2，也等于3个长方形所用的铁丝。",
    "solution": {
      "en": {
        "strategy": "Use the wire around the two squares to find each half of the original wire, then use the other half for the three rectangles.",
        "steps": [
          {
            "title": "Find the original wire length",
            "text": "Each square has perimeter 4 × 12 = 48 cm. The two squares use 2 × 48 = 96 cm. This is one of the two equal wire pieces, so the original wire length was 2 × 96 = 192 cm."
          },
          {
            "title": "Find each rectangle's perimeter",
            "text": "The other 96 cm of wire forms 3 identical rectangles. Each rectangle therefore has perimeter 96 ÷ 3 = 32 cm."
          },
          {
            "title": "Find each rectangle's area",
            "text": "For a rectangle, 2(length + breadth) = 32, so length + breadth = 16 cm. Its breadth is 6 cm, hence its length is 16 − 6 = 10 cm. Area = 10 × 6 = 60 cm²."
          }
        ],
        "answerCheck": "(a) 192 cm; (b) 60 cm²"
      },
      "zh-Hans": {
        "strategy": "先利用围成两个正方形的铁丝长度求原铁丝的一半，再把另一半用于3个长方形。",
        "steps": [
          {
            "title": "求原铁丝的长度",
            "text": "每个正方形的周长 = 4 × 12 = 48 cm。两个正方形用去2 × 48 = 96 cm。这是两段等长铁丝中的一段，所以原铁丝长度 = 2 × 96 = 192 cm。"
          },
          {
            "title": "求每个长方形的周长",
            "text": "另一段96 cm铁丝围成3个相同长方形，所以每个长方形的周长 = 96 ÷ 3 = 32 cm。"
          },
          {
            "title": "求每个长方形的面积",
            "text": "长方形满足2(长 + 宽) = 32，所以长 + 宽 = 16 cm。宽是6 cm，因此长 = 16 − 6 = 10 cm。面积 = 10 × 6 = 60 cm²。"
          }
        ],
        "answerCheck": "所以(a)原铁丝长192 cm；(b)每个长方形的面积是60 cm²。"
      }
    }
  },
  {
    "id": 101,
    "topic": "2-part Word Problems",
    "question": "The figure shows 3 identical rectangles arranged in a step pattern, so each rectangle overlaps the next rectangle in a corner square. The shaded areas where the rectangles overlap are squares of 25 cm² each. Each rectangle is 13 cm by 9 cm. (a) Find the perimeter of the whole figure. (b) Find the total area of the unshaded parts.",
    "answer": "(a) 92 cm; (b) 251 cm²",
    "model": "geometry",
    "hint": "Each overlap square is 5 cm by 5 cm. For (a), the 3 rectangles have 132 cm of edge in total and each overlap hides 20 cm of it. For (b), the middle rectangle loses 2 overlap squares, each end rectangle only 1.",
    "questionZh": "图中3个完全相同的长方形排成阶梯状，每个长方形与下一个长方形在一个角上的正方形处重叠。长方形重叠的阴影区域各是面积25 cm²的正方形。每个长方形是13 cm × 9 cm。 (a) 求整个图形的周长。 (b) 求未阴影部分的总面积。",
    "hintZh": "每个重叠正方形是5 cm × 5 cm。第(a)问：3个长方形的边长共132 cm，每处重叠会遮住其中20 cm。第(b)问：中间的长方形减去2个重叠正方形，两端的长方形各只减1个。",
    "solution": {
      "en": {
        "strategy": "Find the side of each overlap square, then subtract the edges and areas hidden by the two overlaps.",
        "steps": [
          {
            "title": "Find the overlap dimensions",
            "text": "Each shaded overlap square has area 25 cm², so its side length is 5 cm."
          },
          {
            "title": "Find the perimeter",
            "text": "One 13 cm by 9 cm rectangle has perimeter 2(13 + 9) = 44 cm. Three rectangles have 3 × 44 = 132 cm of perimeter before overlapping. At each of the 2 overlaps, 20 cm of edge is hidden, so the whole perimeter is 132 − 2 × 20 = 92 cm."
          },
          {
            "title": "Find the total unshaded area",
            "text": "Each rectangle has area 13 × 9 = 117 cm², so their areas total 3 × 117 = 351 cm². The middle rectangle has 2 shaded 25 cm² squares and each end rectangle has 1, giving 4 × 25 = 100 cm² of shaded rectangle area. Unshaded area = 351 − 100 = 251 cm²."
          }
        ],
        "answerCheck": "(a) 92 cm; (b) 251 cm²"
      },
      "zh-Hans": {
        "strategy": "先求每个重叠正方形的边长，再扣除两个重叠处被遮住的边和阴影面积。",
        "steps": [
          {
            "title": "求重叠正方形的边长",
            "text": "每个阴影重叠正方形的面积是25 cm²，所以边长是5 cm。"
          },
          {
            "title": "求整个图形的周长",
            "text": "一个13 cm × 9 cm长方形的周长是2(13 + 9) = 44 cm。3个长方形未重叠时周长合计3 × 44 = 132 cm。2个重叠处各遮住20 cm的边，所以整个图形的周长 = 132 − 2 × 20 = 92 cm。"
          },
          {
            "title": "求未阴影部分总面积",
            "text": "每个长方形面积 = 13 × 9 = 117 cm²，3个合计3 × 117 = 351 cm²。中间长方形有2个面积为25 cm²的阴影正方形，两端长方形各有1个，共4 × 25 = 100 cm²。因此未阴影部分总面积 = 351 − 100 = 251 cm²。"
          }
        ],
        "answerCheck": "所以(a)整个图形的周长是92 cm；(b)未阴影部分总面积是251 cm²。"
      }
    }
  }
];
