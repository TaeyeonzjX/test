<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			/*var obj = {
				name:"孙悟空",
				age:18,
				gender:"男",
				sayName:function(){
					alert(this.name);
				}
			}*/			
			function createPerson(name,age,gender){
				var obj = new Object();
				obj.name = name;
				obj.age = age;
				obj.gender = gender;
				obj.sayName = function(){
					alert(this.name);
				}
				return obj;
			}
			
			var obj3 = createPerson("猪八戒",28,"男");
			obj3.sayName();
		</script>
	</head>
	<body>
	</body>
</html>


