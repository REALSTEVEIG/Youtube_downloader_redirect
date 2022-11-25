// const querySample = 'https://www.youtube.com/watch?v=mTLQhPFx2nM' 

exports.index = (req, res) => {
    res.render('index')
}

exports.search = async (req, res) => {
    try {

        const {q} = req.query

        let result = q.slice(0, 16)
        console.log(result)



        
        const url = q.split('.')[2]
        // console.log(url)

        result += `.${url}`
        console.log(result)

        return res.status(200).redirect(result)

    } catch (error) {
        console.log(error)
        return res.status(500).json({error})
    }
}