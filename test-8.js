// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về

function first(arr,n) {
	if(n<0){
		arr = [];
	}else{
		if(typeof n === 'undefined'){
			arr = arr.slice(0,1)
		}
		arr = arr.slice(0,n)
	}
	return arr;
}