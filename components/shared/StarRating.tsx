import { Star } from "lucide-react";
interface StarRatingProps { rating: number; reviews?: number; size?: number }
export default function StarRating({ rating, reviews, size = 13 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full w-fit">
      <Star size={size} fill="#F4A261" className="text-gold" />
      <span className="text-sm font-bold text-charcoal">{rating}</span>
      {reviews && (
        <span className="text-xs text-gray-400">({reviews.toLocaleString()} reviews)</span>
      )}
    </div>
  );
}
