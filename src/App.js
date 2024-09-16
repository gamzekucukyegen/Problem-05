import bannerData from "./app/bannerData"

export default function Banner() {
  
  return (
    <div className='banner-wrapper'>
      <div className='flex'>
        <div className='flex-shrink-0'>{bannerData.icon}</div>
        <div className='banner-content'>
          <p className='banner-text'>
            Yeni bir yazılım güncellemesi mevcuttur. Sürümdeki yenilikleri
            inceleyin
          </p>
          <p className='banner-details'>
            <a href={bannerData.href} className='banner-details-link'>
              Detaylar
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
