![Parity Signer](https://wiki.parity.io/images/logo-parity-signer.jpg)

[<img src="./res/github-badge.png" width="250"/>](https://github.com/paritytech/parity-signer/releases/)
[<img src="./res/google-play-badge.png" width="250"/>](https://play.google.com/store/apps/details?id=io.parity.signer)
[<img src="./res/app-store-badge.png" width="250"/>](https://itunes.apple.com/us/app/parity-signer/id1218174838)

## What I did
 - Build for IOS 9
 - I'm using an M1 macbook(this this is the cause of some issues)
   - Had to install native arm64 node
   - had to install native arm64 ruby (the macbook comes with the x86 one for some reason)
   - (I personally don't have rosetta 2 installed cause I wany to see how long I can go without it, 1 month so far!!!. I mean this is a seconday machine... well more like 4idary. guess we are pretty well into the life story now. this is just getting silly)
 - in parity-signer folder run `npm install --force`
 - `sudo gem install cocoapods`
 - in the ios folder (clear pods-lock & pods folder. think they should not exist) do install `pod install`
 - in ios folder open the `.xcodeproj` in xcode
 - Select the NativeSigner Project in the solution explorer (i don't know what it's called in apple speak)
 - select Targets NativeSigner change the team and bundle indentifier
 - select your targeted device
 - Let her rip
   - tested on ios 9.3.3 and it's not working. gonna keep at it

# Parity Signer - Turn your smartphone into a hardware wallet

Parity Signer is a mobile application that allows any smartphone to act as an air-gapped crypto wallet. This is also known as "cold storage".

You can create Kusama and Ethereum accounts, sign messages/transactions, and transfer funds to and from these accounts without any sort of connectivity enabled on the device.

You must turn off or even physically remove the smartphone's Wifi, Mobile Network, and Bluetooth to ensure that the mobile phone containing these accounts will not be exposed to any online threat.

**Disabling the mobile phone's networking abilities is a requirement for the app to be used as intended.**

Have a look at the tutorial on our wiki to learn how to use [Parity Signer together with Polkadot-js app](https://wiki.parity.io/Parity-Signer-Mobile-App-Apps-Kusama-tutorial) for Kusama,  or [MyCrypto app](https://wiki.parity.io/Parity-Signer-Mobile-App-MyCrypto-tutorial) and [Parity Fether](https://wiki.parity.io/Parity-Signer-Mobile-App-Fether-tutorial) for Ethereum.

Any data transfer from or to the app happens using QR code. By doing so, the most sensitive piece of information, the private keys, will never leave the phone. The Parity Signer mobile app can be used to store any Kusama or Ethereum account, this includes KSM, ETH, ETC as well as Ether from various testnets (Kovan, Ropsten...).

## Getting Start

- [Building](https://github.com/paritytech/parity-signer/wiki/Building)
- [Testing](https://github.com/paritytech/parity-signer/wiki/Testing)
- [Troubleshooting](https://github.com/paritytech/parity-signer/wiki/Troubleshooting)
- [Publishing](https://github.com/paritytech/parity-signer/wiki/Publishing)

## License

Parity-Signer is [GPL 3.0 licensed](LICENSE).
