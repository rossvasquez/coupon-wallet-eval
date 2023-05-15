export const db = {

    businesses: [
        {
            id: 56781,
            name: "Jim's Gym", 
            icon: '',
            image: '',
            color: 'bg-red-400',
            offers: {
                one: '35% Off In-House Suplements (Limit 2 Items)',
                two: 'One Day Guest Pass',
            }
        },
        {
            id: 56782,
            name: "Aaron's Autobody",
            icon: '',
            image: '',
            color: 'bg-blue-400',
            offers: {
                one: '25% Off Standard Oil Change',
                two: 'Free Tire Rotation and Brake Check with Oil Change'
            }
        },
        {
            id: 56783,
            name: "Greens Galore",
            icon: '',
            image: '',
            color: 'bg-green-500',
            offers: {
                one: 'Free Juice Shot with Next Purchase',
                two: 'Free Protein Add-On for All Salads',
                three: '20% Off All Juice Cleansing Programs'
            }
        }
        
    ],

    users: [
        {
            id: 87651,
            username: 'rogerwaters',
            password: 'Prism$123',
            linkedBusinesses: [
                {
                    id: 56781,
                    coupons: [
                        {
                            offer: 'one',
                            expires: '8/17/23',
                            redeemed: false
                        },
                        {
                            offer: 'two',
                            expires: '09/02/23',
                            redeemed: false
                        }
                    ]
                },
                {
                    id: 56782,
                    coupons: [
                        {
                            offer: 'one',
                            expires: '07/22/23',
                            redeemed: false
                        }
                    ]
                },
                {
                    id: 56783,
                    coupons: [
                        {
                            offer: 'one',
                            expires: '06/12/23',
                            redeemed: false
                        }
                    ]
                }
            ]
        },
        {
            id: 87652,
            username: 'janisjoplin',
            password: 'RockOn%123',
            linkedBusinesses: [
                {
                    id: 56781,
                    coupons: [
                        {
                            offer: 'two',
                            expires: '8/22/23',
                            redeemed: false
                        }
                    ]
                },
                {
                    id: 56781,
                    coupons: [
                        {
                            offer: 'two',
                            expires: '07/14/23',
                            redeemed: false
                        }
                    ]
                },
                {
                    id: 56781,
                    coupons: [
                        {
                            offer: 'two',
                            expires: '06/21/23',
                            redeemed: false
                        },
                        {
                            offer: 'three',
                            expires: '08/10/23',
                            redeemed: false
                        }
                    ]
                }
            ]
        }
    ]
};