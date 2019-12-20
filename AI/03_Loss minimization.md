## Loss Minimization

> **최적화** 
> (optimization problem)

가중벡터의 최적화를 통해 손실을 최소화 한다.


최적화의 두 종류 :

1) 최적화 문제

2) 최적화 알고리즘


<img src=./image/LossFunction.png>

LossFunction
```
Loss(x , y , w)  -> 인풋 x가 있고 y를 출력하기 위해 w를 조정한다.
```

Score : 얼마나 예측에 자신할 수 있는지에 대한 수치
Margin : 얼마나 맞았는지를 기록		
(큰 숫자일 수록 정확도가 높다는 의미 , 음수의 margin값은 분류 오류)

<img src=./image/MarginScoreQnA.png>


-- Zero One Loss
(Binary Classification)

<img src=./image/ZOL.png>

<img src=./image/ZOL1.png>

<img src=./image/ZOL2.png>


단순한 Score로만 따진다면  0, 1이지만,
margin 값을 통해 해당 값이 어느정도 위치에 있는 값인지 알 수 있다.

<img src=./image/LinearRegression.png>


무수한 점들과 1차원 그래프 linear prediction의 차이를 비교하게 된다,
이때 각 점과 선사이의 거리를 residual (잔여, 공백) 이라고 명하며 이를 기록한다.

#
#### Linear regression ->  Loss Function 2종류
> - Squared Loss
> - Absolute Loss

|                |Squared Loss|Absolute Loss|
|----------------|-------------------------------|-----------------------------|
|의 미 |`'Isn't this fun?'`            |'Isn't this fun?'            |
|계산법          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|특          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4ODg3Njg1NDYsLTEyMDU1MjIwMDUsLT
U3NjE1NjgyLC0xMzgwMzE0NDgwLDEzOTY4OTEzODldfQ==
-->