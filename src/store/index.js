import userStore from '@store/user';
import cjkTransactionSummaryStore from '@store/cjk_transaction_summary';
import cjkStoryStore from '@store/cjk_story';
import { writable } from 'svelte/store';

export const user = userStore();
export const cjkTransactionSummary = cjkTransactionSummaryStore();
export const cjkStory = cjkStoryStore();
export const sound = writable({ wd: undefined, depo: undefined });
