class ArticlePage {
    readonly editButton = '[ui-sref="app.editor({ slug: $ctrl.article.slug })"]'
    readonly delButton = '[ng-click="$ctrl.deleteArticle()"]'
    readonly articleTitle = '[ng-bind="::$ctrl.article.title"]'
    readonly articleBody = '[ng-bind-html="::$ctrl.article.body"]'
}

export default ArticlePage;
