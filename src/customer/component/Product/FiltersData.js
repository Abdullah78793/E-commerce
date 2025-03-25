

export const color = [
    "white",
    "black",
    "Red",
    "marun",
    "Yellow",
    "Green",
    "Pink",
    "Beige",
]
export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {
                label:"white",
                value:"white",
            },
            {
                label:"Black",
                value:"black",
            },
            {
                label:"Red",
                value:"Red",
            },
            {
                label:"Maroon",
                value:"maroon",
            },
            {
                label:"Yellow",
                value:"yellow",
            },
            {
                label:"Green",
                value:"green",
            },
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {
                label:"S",
                value:"S",
            },
            {
                label:"M",
                value:"M",
            },
            {
                label:"L",
                value:"L",
            },
        ]
    }
];

export const singlefilters = [
    {
        id:"price",
        name:"Price",
        options:[
            {
               value:'159-399',
               label:"₹159-₹399"
            },
            {
                value:"399-999",
                label:'₹399-₹999',
            },
            {
                value:'999-1999',
                label:"₹999-₹1999",
            },
            {
                value:"1999-2999",
                label:'₹1999-₹2999',
            },
            {
                value:"3999-4999",
                label:'₹3999-₹4999'
            }
        ]
    },
    {
        id:"dscount",
        name:"Discount-Range",
        options:[
            {
                value:'10',
                label:'10% and above',
            },
            {
                value:'20',
                label:'20% and above',
            },
            {
                value:'30',
                label:'30% and above',
            },
            {
                value:'40',
                label:'40% and above',
            },
            {
                value:'50',
                label:'50% and above',
            },
            {
                value:'60',
                label:'60% and above',
            },
            {
                value:'70',
                label:'70% and above',
            },
            {
                value:'80',
                label:'80% and above',
            }
        ]
    },
    {
        id:"availability",
        name:"Availability",
        options:[
            {
                value:'outofstock',
                label:'Out of Stock',
            },
            {
                value:'in-stock',
                label:'In Stock',
            }
        ]
    }
]