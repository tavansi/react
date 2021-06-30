import React from 'react'

const NewPage = () => {
    return (
  <div>
  <div className="main-top" style={{paddingTop: 90}}>
    <a href>
      <span>Trang chủ</span>
    </a>
    <span> / Tin tức</span>
  </div>
  <div className="profile-news" style={{padding: '50px 200px', display: 'grid', gridTemplateColumns: '3fr 4fr'}}>
    <div className="images-news">
      <a href>
        <img src="./image/news/news.png" alt width="400px" height="300px" />
      </a>
    </div>
    <div className="title-news">
      <a href>
        <h3>Thẻ kim cương của shop văn sĩ</h3>
      </a>
      <div className="title-news-span">
        <p>
          Sau khi mua và sử dụng sản phẩm từ shopvansi thì khách hàng sẽ nhận được những quyền lợi
          <br />tương ứng với số lượng sản phẩm đã mua như sau.
          <br />
          - Thành Viên : Giảm 5% [ Từng mua 1 bộ quần áo từ shopvansi ]
          <br />
          - Thành Viên Bạc: Giảm 10% [ Từng mua 3 bộ quần áo từ shopvansi ]
          <br />
          - Thành Viên Vàng: Giảm 15% [ Từng mua 7 bộ quần áo từ shopvansi ]
          <br />
          - Thành Viên Vàng: Giảm 25% [ Từng mua 15 bộ quần áo từ shopvansi ]
        </p>
        <button className="btn">Đọc thêm</button>
      </div>
    </div>
  </div>
</div>

    )
}

export default NewPage
