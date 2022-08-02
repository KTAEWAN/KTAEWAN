import React from 'react';
import './css/index.css';

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="info">
          <div className="profile-image"></div>
          <div className="profile-desc">
            <div className="nickname txt-bold">Kimveloper</div>
            {true ? (
              <div className="quote">
                <textarea placeholder="자신의 한줄평을 입력해주세요."></textarea>
              </div>
            ) : (
              <>
                <div className="quote">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis sint ea
                  explicabo a dicta alias at quod. Dicta facilis voluptatum esse in nisi minima
                  doloremque ullam cum assumenda inventore?
                </div>
                <div className="follow-btn txt-bold">팔로우미</div>
              </>
            )}
          </div>
        </div>
        <div className="feed-images">
          <div className="feed-image">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://c0.wallpaperflare.com/preview/749/278/508/black-background-costume-dark-eerie-thumbnail.jpg"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"
              alt=""
            />
          </div>
          <div className="feed-image">
            <img
              src="https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4="
              alt=""
            />
          </div>
        </div>
        <div className="profile-contents">
          <div className="feed-list">
            <div className="title text-bold">작성한 글</div>
            <div className="feeds">
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                  <div className="image">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                  <div className="image">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">Kimveloper</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>
                <div className="contents">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam
                  repellat facere similique vero officiis quod. Nobis blanditiis iure unde similique
                  magnam nihil eius ad exercitationem repudiandae, ab pariatur veritatis.
                </div>
                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info-desc">
            <div className="desc">
              <div className="title txt-bold">좋아요</div>
              <div className="count">739,000</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">팔로워</div>
              <div className="count">2,539,000</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">포스트</div>
              <div className="count">320</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">친구</div>
              <div className="count">236,320</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
