import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Global/Loading";
import axios from "axios";
import { useQuery } from "react-query";

const Blog = () => {
  const {id} = useParams()
    console.log(id)
    const { isLoading, error, data } = useQuery('SingleBlogData', async ()  => {
        const response = await axios.get(`https://content-sa.com/api/v1/blog/${id}/show`)
        return response.data.data
    })
      if(isLoading) return <Loading />
      console.log(data,'blog')
  return (
    <section className="section blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 col-12">
            <div className="post-details">
              <ul className="post-category">
                <li>
                  <Link href="#">اعمال</Link>
                </li>
              </ul>
              <h2 className="post-title">
                <Link href="#">{data.name}
                </Link>
              </h2>
              <ul className="custom-flex post-meta">
                <li>
                  <Link href="#">
                    <i className="icofont-calendar"></i>
                    24th March 2020
                  </Link>
                </li>
              </ul>
              <p>
                {data.description}
              </p>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً..
              </p>
              <div className="post-image animate-img">
                <Link href="#">
                  <img src={data.image} alt="#" />
                </Link>
              </div>
              <h3>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h3>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً..
              </p>
              <h3>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h3>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً..
              </p>
              <h3>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h3>
              <ul className="list">
                <li>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</li>
                <li>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</li>
                <li>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</li>
                <li>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</li>
                <li>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</li>
              </ul>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً..
              </p>
              <div className="middle-image">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="blog-middle-image">
                      <img src="https://via.placeholder.com/500x500" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <p>
                      هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن
                      يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                      لأنه مازال نصاً بديلاً ومؤقتاً..
                    </p>
                  </div>
                </div>
              </div>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً..
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
