import Link from 'next/link';
import Image from 'next/image';
import { getDate } from '../utils/utils';

export default function BannerPost({ post, featuredMedia }) {
  const posttitle1 = post.content.rendered;
  const StrippedString = posttitle1.replace(/(<([^>]+)>)/ig,"");
  //const StrippedString = JSON.parse(posttitle1);
  //console.log(StrippedString);
  return (
    <div className="row">
        <div className="col-md-6 col-sm-12">
            <div dangerouslySetInnerHTML={{__html: posttitle1}}></div>
            {/* <h1>{post.content.rendered}</h1> */}
            <div className="space10"></div>
            <a href="https://play.google.com/store/apps/details?id=com.app.officecaller" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg btn-rounded btn-lgtleftright">Download Now <i className="fa fa-download"></i></a>
        </div>
        <div className="col-md-6 col-sm-12">
            <div className="officecaller-banner-imgslide">
              <Image
                src={post.images.large}
                width={636}
                height={592}
                // alt={post.content.rendered}
                alt={StrippedString}
              />
            </div>
        </div>
    </div>
  );
}