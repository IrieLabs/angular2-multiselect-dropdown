export interface DropdownSettings{
    singleSelection: Boolean;
    text: String;
    enableCheckAll : Boolean;
    selectAllText: String;
    unSelectAllText: String;
    enableSearchFilter: Boolean;
    maxHeight: Number;
    badgeShowLimit: Number;
    classes: String;
    limitSelection?: Number;
    disabled?: Boolean;
    searchPlaceholderText: String;
    groupBy?: String;
    showCheckbox?: Boolean;
    searchAutofocus?: boolean;
    loadingText?: String;
    isRemoteFilter?: Boolean;
}
