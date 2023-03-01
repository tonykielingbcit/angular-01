import { Component } from '@angular/core';

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  'id':number;
  'title':string;
  'slug':string;
  'excerpt':string;
  'body':string;
  'url':string | null;
  'published_date':string | null;
  'image':string | null;
  'thumb' :string | null;
  'category_id':number | null;
  'created_at':string;
  'updated_at':string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

const CATEGORIES: Category[] = [
  { "id": 1, "slug": "back-end", "name": "Back End" },
  { "id": 2, "slug": "front-end", "name": "Front End" },
  { "id": 3, "slug": "full-stack", "name": "Full Stack" }
];

const TAGS: Tag[] = [
  {"id":1, "name":"Laravel", "slug":"laravel"},
  {"id":2, "name":"PHP", "slug":"php"},
  {"id":3, "name":"Docker", "slug":"docker"}
];

const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "Portfolio Showcase",
    "slug": "portfolio-showcase",
    "excerpt": "A vitae eius numquam amet. Fuga quo illum ipsam odio et.",
    "body": "<p>Ea error fugit cumque non exercitationem non. Molestias et deserunt ad suscipit quis. Rerum voluptatem saepe aperiam assumenda.</p></p>Saepe tenetur nihil quia quidem nemo. Sequi similique iure ullam facilis. Molestias occaecati veritatis provident.</p></p>Adipisci expedita distinctio libero ea. Nulla quam minus beatae voluptate laudantium quis eos. Fugit ullam ut perferendis quia dignissimos. Blanditiis iste et voluptas magni. Voluptate eos qui quaerat iure eius est aut.</p></p>Quisquam est voluptatum aut cupiditate molestias. Explicabo consequuntur nostrum et et non neque. Consequatur sed est sed blanditiis voluptatem nihil.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    "tags": [
      {
        "id": 1,
        "name": "Laravel",
        "slug": "laravel",
        "pivot": { "projects_id": 1, "tags_id": 1 }
      },
      {
        "id": 2,
        "name": "PHP",
        "slug": "php",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      },
      {
        "id": 3,
        "name": "Docker",
        "slug": "docker",
        "pivot": { "projects_id": 1, "tags_id": 3 }
      }
    ]
  },
  {
    "id": 2,
    "title": "SSD Yearbook",
    "slug": "ssd-yearbook",
    "excerpt": "Nostrum voluptatem est esse culpa amet nemo. Earum ea rerum id repudiandae esse quasi et.",
    "body": "<p>Velit perspiciatis tenetur aspernatur cum qui facilis. Quos tempora omnis harum corporis. Cumque quisquam ea cumque aut sed eius. Ut mollitia architecto eaque tempora ab sit alias.</p></p>Recusandae id non sunt voluptatem. Aut et ab et nihil. At unde recusandae ea molestias dignissimos quisquam molestias.</p></p>Dolore qui recusandae non. Non omnis vel similique ullam odit maiores. Libero in consequatur quia dolores. Unde aliquam hic mollitia.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 1, "slug": "back-end", "name": "Back End" },
    "tags": [
      {
        "id": 3,
        "name": "Docker",
        "slug": "docker",
        "pivot": { "projects_id": 1, "tags_id": 3 }
      }]
  },
  {
    "id": 3,
    "title": "Movie Mania",
    "slug": "movie-mania",
    "excerpt": "Et autem hic voluptatibus qui ipsa est. Consequatur tempore nihil et laboriosam aut impedit.",
    "body": "<p>Numquam voluptates quod doloremque sed. Odio ea in totam veritatis consequuntur ad cupiditate. Adipisci et qui dolor architecto dicta asperiores a. Consequuntur est impedit explicabo ut iste aperiam error deleniti.</p></p>Consequatur sint quia error exercitationem iusto doloremque non placeat. Ut ea molestiae aut. Ab et dolorum ab sit omnis sit. Consequatur ipsam culpa repellat voluptas.</p></p>Facere rem eum doloribus deleniti repellat. Ut quia amet incidunt. Eos et culpa reiciendis ipsum et molestiae omnis. Cumque reprehenderit delectus eum alias consequatur quibusdam.</p></p>Quod minus aut est quis omnis magnam. Tempora ad ab quia sed est optio distinctio. Ut vel et dolor sint est iure.</p></p>Suscipit dolores omnis quia nihil. Deleniti totam rerum cupiditate. Odio maiores consequatur fuga perspiciatis. Commodi doloremque exercitationem neque eius. Nulla cumque et doloribus ab consectetur voluptatem explicabo.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": null,
    "tags": [
      {
        "id": 2,
        "name": "PHP",
        "slug": "php",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      }
    ]
  },
  {
    "id": 4,
    "title": "News Site Homepage",
    "slug": "news-site-homepage",
    "excerpt": "Placeat doloremque sed doloribus debitis quia omnis quaerat alias. Odio et qui enim eveniet ratione ducimus.",
    "body": "<p>Ut facere cumque hic corrupti animi. Dolore sequi fugit sed quisquam ratione repellat eaque. Eos autem perspiciatis ipsum voluptas voluptas.</p></p>Cum illum iste quia et minima ipsam non. Quas nobis et laborum nihil animi. Quia corrupti et saepe est consectetur ducimus dolores.</p></p>Voluptas rerum sed voluptates ea aliquid. Laboriosam in quisquam tempore sed saepe totam.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {
        "id": 2,
        "name": "PHP",
        "slug": "php",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      }
    ]
  },
  {
    "id": 5,
    "title": "JavaScript Game",
    "slug": "javascript-game",
    "excerpt": "Nostrum dolores dignissimos qui omnis rerum blanditiis. Tenetur et aut eum est.",
    "body": "<p>Sit quae laborum sunt dolorum voluptatem et ipsam. Et ipsum animi exercitationem est omnis.</p></p>Autem autem est non voluptatibus. A neque veniam voluptas quo vitae adipisci odio. Vitae quo ea atque molestiae dolorem in.</p></p>Similique adipisci eum qui voluptate repudiandae tempore corporis. At iste earum totam minima dignissimos odio sed animi. Rerum exercitationem est est expedita quae. Mollitia minima ut necessitatibus est dolores rem. Ducimus sit consequatur eos quia omnis.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": []
  },
  {
    "id": 6,
    "title": "iOS App",
    "slug": "ios-app",
    "excerpt": "Qui dolores et velit. Quo nostrum laboriosam est in possimus accusantium.",
    "body": "<p>Ut consequatur modi voluptates officia inventore consequatur. Molestiae possimus voluptate nihil voluptatem et harum sapiente. Aut voluptas possimus aspernatur beatae omnis ad et. Non non ipsum laborum quisquam et.</p></p>Ullam ab velit at non. Deserunt ut ea veritatis sapiente aliquid eos quia et. Commodi dolore esse voluptatem delectus.</p></p>Velit velit numquam cupiditate quis. Quos et veniam nobis omnis.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": null,
    "tags": []
  },
  {
    "id": 7,
    "title": "Android App",
    "slug": "android-app",
    "excerpt": "Omnis odio repudiandae cupiditate consequatur facilis et rem. Quas dolor ab quo aperiam.",
    "body": "<p>Est et quia ipsam odio voluptatem fuga ducimus. Non illo vitae sed commodi ut. Tempora commodi tenetur velit incidunt ullam.</p></p>Id cum saepe asperiores voluptas quidem quos. Ipsum facilis illum voluptate asperiores.</p></p>Mollitia reprehenderit autem molestias. Sed quia officia velit non sunt. Esse delectus consequatur minus laboriosam laudantium alias. Qui commodi est assumenda accusamus.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": null,
    "tags": []
  },
  {
    "id": 8,
    "title": "Industry Project",
    "slug": "industry-project",
    "excerpt": "Iure ratione nemo cumque. Aliquid esse soluta provident consequatur velit ut architecto.",
    "body": "<p>Deleniti rerum labore sint quibusdam. Expedita ea reiciendis molestiae et amet repellendus autem voluptates. Aut qui voluptas ullam suscipit necessitatibus libero veritatis.</p></p>Pariatur voluptatum quia at quod. Quod quisquam qui commodi. Autem quae sequi minus iste.</p></p>Id atque magnam dolorem minus omnis aut accusantium. Et maxime blanditiis asperiores itaque sit qui culpa est. Consequatur esse excepturi suscipit ea et est corporis. Iure earum dolorum pariatur id.</p></p>Quia dicta quis libero eos odio expedita. In blanditiis doloribus natus ullam expedita est. Sed voluptatibus rerum distinctio voluptate assumenda vel cum.</p></p>Provident ut ipsam minus eos. Quaerat est tempore architecto sint. Vitae deserunt ullam corrupti asperiores sit quia facilis.</p></p>Quia minus ut qui cum odio error dolor quia. Rerum minus molestias voluptatum et eius consequatur. Autem quis et molestiae quidem provident voluptas fuga vel. Voluptatibus quas accusantium doloremque dolores deleniti eum.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    "tags": [
      {
        "id": 2,
        "name": "PHP",
        "slug": "php",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      }
    ]
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TK - Angular assign-01';
  pageTitle = 'Projects';
  date = new Date();
  author = "";
  categories = CATEGORIES;
  tags = TAGS;
  projects = PROJECTS;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    if (this.tagFilter)
      this.projects = this.projects.filter(p => p.category_id === category.id);
    else this.projects = PROJECTS.filter(p => p.category_id === category.id);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag
    let tempArray = [];
    if (this.categoryFilter)
      tempArray = this.projects;
    else
      tempArray = PROJECTS;

    this.projects = tempArray.filter(p => {
      // console.log("1- p=> ", p, "tag:: ", tag)
      if (p?.tags && p.tags?.length > 0) {
        // console.log("2- p tags::: ", p.tags)
        for (let t of p.tags) {
          // console.log("3- t og p.tags: ", t)
          if (t.slug === tag.slug) return true;
        }
      }
      return false;
    });
    
  }

  deleteCategoryFilters() {
    this.categoryFilter = undefined;
    if (this.tagFilter) this.setTagFilter(this.tagFilter);
    else this.projects = PROJECTS;
  }

  deleteTagFilters() {
    this.tagFilter = undefined;
    this.projects = PROJECTS;
    if (this.categoryFilter) this.setCategoryFilter(this.categoryFilter);
    else this.projects = PROJECTS;
  }

  reloadPage() {
    // window.location.reload();
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
    this.projects = PROJECTS;
  }
}
