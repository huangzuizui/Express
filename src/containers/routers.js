import React from 'react';
import { Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';

import Home from '../components/home';
import About from '../components/about';
import NewsList from '../components/newsList';
import NewsContent from '../components/newsContent';
import Frame from '../components/common/frame';
import Error404 from '../components/error404';

const routes = (
        <Route path="/" component={Frame}>
            <IndexRoute  component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={NewsList}/>
            <Route path="/newsItem/:id" component={NewsContent}/>
            <Route path="/newsId" component={NewsContent}/>
            <Route path="*" component={Error404}/>
        </Route>
)

export default routes