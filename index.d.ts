/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface BestMatch {
  string: string
  score: number
}
export interface BestMatchResult {
  bestMatch: BestMatch
  allMatches: Array<BestMatch>
  hasTie: boolean
}
export const enum SimilarityAlgorithm {
  JaroWinkler = 0,
  LevenshteinSimilarity = 1
}
export interface FindBestMatchOptions {
  algorithm?: SimilarityAlgorithm
  threshold?: number
}
export declare function stringSimilarity(s1: string, s2: string, algorithm?: SimilarityAlgorithm | undefined | null): number
export declare function findBestMatch(target: string, candidates: Array<string>, options?: FindBestMatchOptions | undefined | null): BestMatchResult
export declare function levenshteinDistance(s1: string, s2: string): number
