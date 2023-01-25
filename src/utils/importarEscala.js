const reader = require('xlsx')

// Reading our test file
//const file = reader.readFile(__dirname + '/test.xlsx')
const file = reader.readFile(__dirname + '/../resources/SugerenciasEscala.xlsx')
let escala = []
let resultados = []

//const sheets = file.SheetNames

let temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
    temp.forEach((res) => {
        escala.push(res)
    })

temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[1]])
    temp.forEach((res) => {
        resultados.push(res)
    })

module.exports = {escala, resultados}

// Printing data



/* // Sample data set
let student_data = [{
    Student: 'Nikhil',
    Age: 22,
    Branch: 'ISE',
    Marks: 70
},
{
    Student: 'Amitha',
    Age: 21,
    Branch: 'EC',
    Marks: 80
}]

const ws = reader.utils.json_to_sheet(student_data)

reader.utils.book_append_sheet(file, ws, "Hoja3")

// Writing to our file
reader.writeFile(file, __dirname + '/test.xlsx') */