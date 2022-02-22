//Вспомогательный метод для проверки на четность
const isEven = a => {
  return a % 2 == 0
}

const create_array = n => {

    if(!n || typeof n !== 'number' || n === null) throw new Error('The arg must have, and should be a number')

    const res = [] //итоговый массив значений

    //генерируем n-значений, в дальнейшем используются для создания длины массивов
    const arr = new Uint8Array(n)
    window.crypto.getRandomValues(arr)

    for(let i = 0; i < arr.length; i++) {
        const ind = arr[i]
        
        //создаем случайные значения для заполнения каждого массива
        const subArr = new Uint8Array(ind)
        window.crypto.getRandomValues(subArr)
        
        const tmp = []
        for(let j = 0; j < ind; j++) {
            tmp.push(subArr[j])
        }
        
        //пушим в итоговый массив отсортированные массивы
        res.push(
            isEven(i) ? tmp.sort((a, b) => a - b) : tmp.sort((a, b) => b - a)
        )
    }
    return res
}

let test = create_array(4)


console.log(test)