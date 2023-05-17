# Coupon Wallet Evaluation

## Thoughts

Coming from React, there was definetly some learning to be done. Having not yet touched Vue, I enjoyed the experience more than React. It seems more straightforward. At the least, this evaluation was a great introduction to Vue/Nuxt and something for me to expand on.

I hadn't yet used Tailwind, I also thouroughly enjoyed that experience and it felt very clean.

I used Supabase to host a small backend that features user information and information pertaining to my fake businesses and coupons.

I also used their storage to host some AI images I prompted on Midjourney for each business.

Redeeming coupons and removing connected businesses is a local action currently, it could be built into the database but I didn't want things deleted with no way to get it back when people view the site.

For the coupons I used QR codes, this is what the POS at my current job accepts. Barcodes or actual codes to type in are also viable, it's just what I went with for this example.

## Credentials

My application currently has three accounts:

tiger@gmail.com
Gr33nJ@cket

mj23@jumpman.air
Car0linaBlue!

roger.waters@gmail.com
Pri$m123

## Conclusion

I like the direction this product went, it isn't exactly polished but I believe the concept is there and the user experience is manageable. I ran into some problems along the way, I wanted each coupon to match a color gradient by business but was having trouble attaching tailwinds bg-gradient classes from the database. There was also a weird bug where after login the wallet was a little messed up. Using fontawesome for the first time there was also a duplicate element issue that had very limited resources online but I finall found some people with the same problem.
