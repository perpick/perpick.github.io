export enum GA_EVENTS {
    "earn_virtual_currency" = "earn_virtual_currency",
    "join_group" = "join_group",
    "login" = "login",
    "purchase" = "purchase",
    "refund" = "refund",
    "search" = "search",
    "select_content" = "select_content",
    "share" = "share",
    "sign_up" = "sign_up",
    "spend_virtual_currency" = "spend_virtual_currency",
    "tutorial_begin" = "tutorial_begin",
    "tutorial_complete" = "tutorial_complete",
    "add_payment_info" = "add_payment_info",
    "add_shipping_info" = "add_shipping_info",
    "add_to_cart" = "add_to_cart",
    "add_to_wishlist" = "add_to_wishlist",
    "begin_checkout" = "begin_checkout",
    "generate_lead" = "generate_lead",
    "remove_from_cart" = "remove_from_cart",
    "select_item" = "select_item",
    "select_promotion" = "select_promotion",
    "view_cart" = "view_cart",
    "view_item" = "view_item",
    "view_item_list" = "view_item_list",
    "view_promotion" = "view_promotion",
    "level_end" = "level_end",
    "level_start" = "level_start",
    "level_up" = "level_up",
    "post_score" = "post_score",
    "unlock_achievement" = "unlock_achievement",
}

export interface EarnVirtualCurrencyDataType {
    virtual_currency_name: any;
    value: any;
    send_to: any;
}

export interface JoinGroupDataType {
    group_id: any;
    send_to: any;
}

export interface LoginDataType {
    method: any;
    send_to: any;
}

export interface PurchaseDataType {
    transaction_id: any;
    value: any;
    currency: any;
    tax: any;
    shipping: any;
    items: any;
    coupon: any;
    send_to: any;
}

export interface RefundDataType {
    transaction_id: any;
    value: any;
    currency: any;
    tax: any;
    shipping: any;
    items: any;
    send_to: any;
}

export interface SearchDataType {
    search_term: any;
    send_to: any;
}

export interface SelectContentDataType {
    content_type: any;
    item_id: any;
    send_to: any;
}

export interface ShareDataType {
    content_type: any;
    item_id: any;
    send_to: any;
}

export interface SignUpDataType {
    method: any;
    send_to: any;
}

export interface SpendVirtualCurrencyDataType {
    item_name: any;
    virtual_currency_name: any;
    value: any;
    send_to: any;
}

export interface TutorialBeginDataType {
    
}

export interface TutorialCompleteDataType {
    
}

export interface AddPayment_infoDataType {
    
}

export interface AddShipping_infoDataType {
    
}

export interface AddToCartDataType {
    
}

export interface AddToWishlistDataType {
    
}

export interface BeginCheckoutDataType {
    
}

export interface GenerateLeadDataType {
    
}

export interface RemoveFromCartDataType {
    
}

export interface SelectItemDataType {
    
}

export interface SelectPromotionDataType {
    
}

export interface ViewCartDataType {
    
}

export interface ViewItemDataType {
    
}

export interface ViewItem_listDataType {
    
}

export interface ViewPromotionDataType {
    
}

export interface PostScoreDataType {
    
}

export interface LevelUpDataType {
    
}

export interface LevelStartDataType {
    
}

export interface LevelEndDataType {
    
}

export interface UnlockAchievementDataType {
    achievement_id: any;
    send_to: any;
}

export type GA_DATAS = 
    EarnVirtualCurrencyDataType |
    JoinGroupDataType |
    LoginDataType |
    PurchaseDataType |
    RefundDataType |
    SearchDataType |
    SelectContentDataType |
    ShareDataType |
    SignUpDataType |
    SpendVirtualCurrencyDataType |
    TutorialBeginDataType |
    TutorialCompleteDataType |
    AddPayment_infoDataType |
    AddShipping_infoDataType |
    AddToCartDataType |
    AddToWishlistDataType |
    BeginCheckoutDataType |
    GenerateLeadDataType |
    RemoveFromCartDataType |
    SelectItemDataType |
    SelectPromotionDataType |
    ViewCartDataType |
    ViewItemDataType |
    ViewItem_listDataType |
    ViewPromotionDataType |
    PostScoreDataType |
    LevelUpDataType |
    LevelStartDataType |
    LevelEndDataType |
    UnlockAchievementDataType