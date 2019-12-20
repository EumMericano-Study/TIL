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

w = [2, -1], 



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NTUxNDgyNTIsLTEzODAzMTQ0ODAsMT
M5Njg5MTM4OV19
-->