# [부스트코스] 비전공자를 위한 HTML/CSS
💡 강의 내용을 복습하고 실습 자료를 정리하기 위한 용도로 제작되었습니다.<br>
https://hk713-swsd.notion.site/HTML-CSS-41da6b53151e4a92a67cef611e297fe3

## HTML
### Hyper Text Markup Language

- **태그**

    ‘무언가를 표기하기 위한 꼬리표, 이름표’ 라는 의미. <, > 기호로 표현하며 < ,> 기호 사이에 태그 이름이 들어간다.
    
- **속성**
 
    속성은 태그에 추가로 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있는 설정값을 의미한다. 시작태그에서 태그 이름 뒤에 공백으로 구분 후 속성 이름 = “속성값” 으로 표현한다. 
    
    ```html
    <h1 id="title">Hello, HTML</h1>
    ```

    여러 속성을 선언할 때는 공백으로 구분해서 사용한다. 선언 순서는 태그에 영향을 미치지 않는다.
    
- **태그의 중첩** 

    태그 안에서는 중첩이 얼마나 되는지 어떤 태그를 쓰는지는 문제가 되지 않는다. 하지만 때에 따라 정해진 태그만 중첩할 수 있기도 한다. 
    
- **빈 태그**

    내용이 없어서 종료 태그가 필요하지 않다. 
   
    ```html
    <br> , <img src="">, <input type=''> 등
     ```

    
- **공백**
 
    기본적으로 HTML은 두 칸 이상의 공백을 모두 무시한다. 심지어 개행도 무시한다.
    
- **주석**

    화면에 노출되지 않고 메모의 목적으로만 사용하는 것이다. 주석의 시작은 <!— 로 표시하고, —> 표시로 종료한다.
    
## HTML의 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<title>HTML</title>
	</head>
	<body>
		<h1>Hello,HTML</h1>
	</body>
</html>
```
