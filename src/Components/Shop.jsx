import React, { useEffect } from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

export default function Shop() {
 

  const scroll = () => {
    window.scrollTo(0,0); 

    console.log("scroll value reset")
  }
  useEffect(() => {
    scroll();
  }, [])

  return (
    <div>

      {/* START LOADER */}
      {/* <div id="loader-wrapper">
          <div id="loading-center-absolute">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div> */}
      {/* END LOADER */}
      {/* START HEADER */}

      {/* END HEADER */}{/* START SECTION BANNER */}
      <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>Shop Now</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12">
              <div className="res_md_mt_50 res_sm_mt_20 text-center animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                <p>In the way to get safe with your crypto asset we want to offer the best wallet where you can store more 100 cryptos. Easy to manage with the app for IOs, Android and from your PC.</p>
                <img src="assets/images/wallet.jpg" alt="wallet" className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_navy_blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title_default_light title_border text-center">
                <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>How does REAL Series work?</h4>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>The Ballet REAL Series wallet is a physical wallet that gives you
                  complete and exclusive control of your digital assets. Hidden in the physical wallet is a two-factor cryptographic private key that allows the wallet to function as a bearer asset, just like cash or gold.</p>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>The main feature on the front is the QR code of the wallet's cryptocurrency deposit address. It allows you to immediately deposit funds to the wallet without the need to set anything up.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>
                <img src="assets/images/ballet-wallet-card.jpg" alt="Ballet Wallet" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mobileapp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
              <div className="res_md_mt_50 res_sm_mt_20 text-center animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>
                <img className="bounceimg" src="assets/images/mobile-wallet.png" alt="mobile_app6" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-first">
              <div className="title_blue_dark title_border">
                <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Download Mobile App</h4>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Ballet Crypto is a companion app that serves as a digital interface for physical Ballet products. The app provides all the essential functions of a cryptocurrency wallet while allowing private keys to remain securely offline.</p>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: '0.6s', opacity: 1 }}>Download Ballet Crypto, scan the QR code of the deposit address on the REAL Series wallet, you can create your virtual wallet in the app. Ballet Crypto can help you send, buy, swap cryptocurrency, check their market value and many other functions.</p>
              </div>
              <div className="btn_group animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>
                <a href="#" className="btn btn-default btn-radius"><em className="ion-social-android" />Android APK</a>
                <a href="https://apps.apple.com/us/app/id1474912942" target="_blank" className="btn btn-default btn-radius"><em className="ion-social-apple" />Apple Store</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title_border text-center">
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>The Ballet Crypto app is a companion app to your Ballet wallet. When using the app, your assets are kept completely offline on your wallet. The app does not store the credentials of your wallet and cannot access your private key. Your assets are kept offline and no one can hack or otherwise gain access to your funds through the app.</p>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Please note that all cryptocurrency purchase services in the Ballet Crypto app are handled by third parties. Ballet does not sell or transmit cryptocurrency in any form. By using these third party-services you agree to be bound by their terms and conditions and any applicable laws or regulations.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>
                <img src="assets/images/ballet-crypto-app.png" alt="Ballet Crypto App" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_green">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_light title_border text-center">
                <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Features</h4>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>No Account Registration</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>Scan the QR code on your Ballet product to start using the app. There is no need to register an account.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>Real-Time Market Value</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: '0.6s', opacity: 1 }}>The app allows Ballet wallet customers to check the market value of their assets in real time.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: '0.6s', opacity: 1 }}>Privacy Guaranteed</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>The app does not store your wallet’s private keys. It also does not track, store or transmit your personal or financial data outside the app.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: 1 }}>Open-Source Industry Standard</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: '0.9s', opacity: 1 }}>Ballet wallets and the Ballet Crypto app use the open-source BIP38 protocol.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_border">
                <h3 className="animation mb-4 text-center animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}><strong>Functions</strong></h3>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Deposit and Send Crypto</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>The Ballet Crypto app allows you to easily deposit, send and manage your cryptocurrency accounts, with safe and efficient processing of transactions. Simply follow the on-screen instructions - no hassle, no confusion.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Air-gapped Signing</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>This feature allows you to enter the private key entropy in an offline environment, keeping this sensitive data secure.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Wallet Connect</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Wallet Connect is an open source protocol enabling the Ballet Crypto App to seamlessly connect with Daps as well as display and sell NFTs on popular NFT marketplaces.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Store NFTs</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>You can now store NFTs on your Ballet wallet, transforming digital collectibles into physical form.</p><p />
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Activate Multicurrency</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>The app allows you to activate use of multiple cryptocurrencies on your Ballet product, allowing you to deposit, store, and send more than 100 kinds of cryptocurrencies. Please note: some cryptocurrency activations may require an additional fee.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Buy Crypto</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>You can use a credit or debit card to conveniently buy cryptocurrency and automatically deposit it to your Ballet wallet.</p><p /><p />
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Swap Crypto</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>The Ballet Crypto app offers an integrated cryptocurrency swap and trading service, allowing you to easily trade coins and tokens within your Ballet wallet.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Transfer Assets</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Customers can transfer assets from one Ballet wallet to another using just one tap.</p>
                <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Import Crypto</h6>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>The app allows you to easily import all of the most common private key formats to your Ballet wallet, including mnemonic words (BIP39 / BIP44 / BIP49 / BIP84 backup seed), WIF, Mini key, BIP38 and others.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>
                <a href="#" className="btn btn-default btn-radius">Buy Now</a>
              </div>
              <h4 className="mt-4">Real Wallet Price</h4>
              <p className="animation mb-1 animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>Stainless Silver 75 USDT + 12.00 USDT Cargo</p>
              <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>Gold Plated 24K 140 USDT + 12.00 USDT Cargo</p>
            </div>
          </div>
        </div>
      </section>
      {/* START FOOTER SECTION */}

      {/* END FOOTER SECTION */}
      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <div className="spop-container spop--bottom-left" id="spop--bottom-left" />
      <Footer />
    </div>
  )
}
