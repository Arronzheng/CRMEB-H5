import request from "@utils/request";

/*
 * 课程分类
 * */
export function getCategory(q) {
  return request.post("/course/api/course/category/list", q, { login: false });
}

/*
 * 未登录课程详情
 * */
export function getProductDetail(id) {
  return request.post("/course/api/course/view", {courseId: id}, { login: false });
}

/*
 * 登录后课程详情
 * */
export function getUserProductDetail(id) {
  return request.post("/course/auth/course/view", {courseId: id}, { login: true });
}

/*
 * 获取腾讯播放url
 * */
export function periodVideoUrl(periodId) {
  return request.post("/course/auth/course/playUrl",
    {periodId: periodId},
    { login: true }
  );
}

/*
 * 课程分销二维码
 * */
export function getProductCode(id) {
  return request.get("/product/code/" + id, {}, { login: true });
}

/*
 * 课程列表
 * */
export function getProducts(q) {
  return request.post("/course/api/course/list", q, { login: false });
}

/*
 * 购物车数量
 * */
export function getCartNum() {
  return request.get("/cart/count");
}

/*
 * 添加收藏
 * */
export function toCollect(id, category) {
  return request.get("/collect/add/" + id + "/" + category);
}

/*
 * 为你推荐
 * */
export function getHostProducts(page, limit) {
  return request.get(
    "/product/hot",
    { page: page, limit: limit },
    { login: false }
  );
}

/*
 * 精品、热门、首发列表
 * */
export function getGroomList(type) {
  return request.get("/groom/list/" + type, {}, { login: false });
}

/*
 * 购物车 添加
 * */
export function postCartAdd(data) {
  return request.post("/cart/add", data);
}

/*
 * 购物车列表
 * */
export function getCartList() {
  return request.get("/cart/list");
}

/*
 * 购物车 删除
 * */
export function postCartDel(ids) {
  return request.post("/cart/del", { ids });
}

/*
 * 购物车 获取数量
 * */
export function getCartCount(data) {
  return request.get("/cart/count", data);
}

/*
 * 购物车 修改课程数量
 * */
export function changeCartNum(id, number) {
  return request.post("/cart/num", { id, number });
}

/**
 * 搜索推荐关键字
 */
export function getSearchKeyword() {
  return request.get("/search/keyword", {}, { login: false });
}

/**
 * 产品评论列表
 */
export function getReplyList(id, q) {
  return request.get("/reply/list/" + id, q, { login: false });
}

/**
 * 产品评价数量和好评度
 */
export function getReplyConfig(id) {
  return request.get("/reply/config/" + id, {}, { login: false });
}

/**
 * 评价页面获取单个产品详情
 */
export function postOrderProduct(unique) {
  return request.post("/order/product", { unique }, { login: false });
}

/**
 * 提交评价页面；
 */
export function postOrderComment(data) {
  return request.post("/order/comment", data, { login: false });
}
