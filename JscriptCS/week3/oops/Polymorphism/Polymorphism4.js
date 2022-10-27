	class firstClass {
		Message() {
			console.log("firstClass Method")
		}
	}
	class secondClass extends firstClass {
		Message() {
            super.Message();
			console.log("second class Method");
		}
	}
	class thirdClass extends secondClass {
		Message() {
			console.log("thirdClass Method")
		}
	}
	var ob1 = new firstClass();
	var ob2 = new secondClass();
	var ob3 = new thirdClass();
	ob1.Message();
	ob2.Message();
	ob3.Message();

