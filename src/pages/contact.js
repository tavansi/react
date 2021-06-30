import React from 'react'

const ContactPage = () => {
    return (
      <div>
  <div className="main-top">
    <a href>
      <span>Trang chủ</span>
    </a>
    <span> / Liên hệ</span>
  </div>
  <form action id="form-send">
    <section id="login-user">
      <div className="title-contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5709847120042!2d105.73129811476376!3d21.049845285987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345458ee3d67ef%3A0x57dea4066941842!2zTmfDtSA4MCBYdcOibiBQaMawxqFuZywgVHUgSG_DoG5nLCBQaMawxqFuZyBDYW5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1613918970795!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
        <hr />
        <div className="Address-contact">
          <h3>Thông tin liên hệ</h3>
          <p>Địa chỉ: Ngõ 80 xuân phương</p>
          <p>Số diện thoại:0965873417</p>
          <p>Gmail:vansi19a@gmail.com</p>
        </div>
      </div>
      <div className="check-contact">
        <div className="email-user">
          <span className="err" id="err-name" />
          <input type="text" id="contact-name" placeholder="Họ tên*" />   
        </div>
        <div className="email-user">
          <span className="err" id="err-email" />
          <input type="text" id="contact-email" placeholder="Email*" />   
        </div>
        <div className="email-user">
          <span className="err" id="err-phone" />
          <input type="number" id="contact-phone" placeholder=" Số Điện thoại*" />   
        </div>
        <div className="email-user">
          <span className="err" id="err-title" />
          <input type="text" id="contact-title" placeholder=" Tiêu đề*" />   
        </div>
        <div className="content-text">
          <textarea name id cols={30} rows={10} placeholder="Nội dung*" defaultValue={""} />   
        </div>
        <div className="click-login">
          <div className="button-login">
            <input className="btn" type="submit" defaultValue="Gửi liên hệ" />
          </div>
        </div>
      </div>
    </section>
  </form>
</div>

    )
}

export default ContactPage;
