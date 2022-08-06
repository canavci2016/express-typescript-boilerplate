import {
    User as UserWithRelationsInterface
} from "./UserWithRelations";

export interface AuthUser extends UserWithRelationsInterface {
    isProfileVisibleForMe?: boolean;
    hasPendingFollowRequest?: boolean;
    vopPoint?: number;
}