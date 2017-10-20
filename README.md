#Design Exercise: “Disconnected App” page

##Assumptions I made:

- The user is logged in.
- The user has already liked/favorited pets.
- A user is able to like/favorite pets without being connected to Ethereum. A record is kept of the user’s “likes” and the donations are made after Ethereum is connected.

##Possible user flows

Visit site > “Like” pets (kept in local storage) > Get prompted to create an account > Create account > see “disconnected app” page > connect Ethereum; money gets donated

Visit site > Create an account/log in > “Like” pets (prompted to visit “disconnected app” page each time) > visit “disconnected app” page > connect Ethereum; money gets donated

##Requirements for this page

- Remind user why they should donate (shows already-liked pets)
- Let user know that they need to connect to Ethereum in order to donate
- Let user know what will happen if they do so (needs work)
- Give user a chance to navigate away/go back to browsing pets (top nav)
- Give user chance to unfavorite pets (interaction needs to be added)
- Let user know how much it will cost
- Get user's trust

# Getting set up
- Run "npm install"
- Install Brave web browser https://brave.com/
- Enable MetaMask Ethereum Extensions
 - Window -> Extensions -> enable MetaMask
- start web server with ```npm start```

# Helpful links
- https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
- https://github.com/ethereum/web3.js/

When a web3 provider (MetaMask) is detected, the "ConnectedApp" will be rendered, and "DisconnectedApp" will be rendered when it is not. You can enable and disable the extension to test the different behaviors (or use a different browser).
