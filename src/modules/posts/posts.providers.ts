import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../core/contants';

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}];