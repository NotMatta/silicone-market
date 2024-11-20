const { prisma } = require("../prisma/prisma-client")


const resolvers = {
    Query: {
        product: async (_parent,{id}) => {
            const res = await prisma.product.findUnique({where: {id: Number(id)}})
            return res
        },
        listProducts: (_parent,args) => {
            console.log(args)
            const res = prisma.product.findMany({
                where:{
                    AND:[
                        {AND: args.keys.map(key => ({"description": {"contains": key}})) },
                        {price: {gte: args.range[0]}},
                        {price: {lte: args.range[1]}}
                    ]
                }
            })
            return res
        }
    }
}

module.exports = {resolvers}

